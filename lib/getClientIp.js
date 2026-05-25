/**
 * Trusted IP extraction for Vercel / Next.js API routes.
 *
 * WHY this order matters:
 *   On Vercel, `x-real-ip` is injected by the edge infrastructure and cannot
 *   be set by the client, making it the most reliable source of the true
 *   client IP. `x-forwarded-for` is a hop-by-hop header; the leftmost value
 *   is whatever the client sends and is fully attacker-controlled, so reading
 *   forwardedFor.split(",")[0] allows trivial rate-limit bypass by rotating
 *   spoofed IPs. When x-real-ip is absent (non-Vercel / local dev), we walk
 *   x-forwarded-for right-to-left and return the rightmost public IP — the
 *   last hop added by a trusted proxy — rather than the client-supplied value.
 */

// Covers RFC-1918, loopback, and IPv6 private/loopback/ULA ranges.
const PRIVATE_IP_RE =
  /^(127\.|10\.|172\.(1[6-9]|2\d|3[01])\.|192\.168\.|::1$|fc[0-9a-f]{2}:|fd[0-9a-f]{2}:)/i;

/**
 * Returns the verified client IP from the incoming request headers.
 *
 * Resolution order:
 *   1. `x-real-ip`          — set by Vercel edge, not forgeable by client
 *   2. `x-forwarded-for`    — walk right-to-left, skip private/loopback hops,
 *                             return the rightmost public address
 *   3. `"unknown"`          — no usable IP found (local dev without a proxy)
 *
 * @param {Headers} headers  The `Headers` object from a Next.js `Request`.
 * @returns {string}         A dotted-decimal IPv4, bracketed IPv6, or "unknown".
 */
export function getClientIp(headers) {
  const realIp = headers.get("x-real-ip");
  if (realIp) {
    const trimmed = realIp.trim();
    if (trimmed) return trimmed;
  }

  const forwardedFor = headers.get("x-forwarded-for");
  if (forwardedFor) {
    const hops = forwardedFor
      .split(",")
      .map((h) => h.trim())
      .filter(Boolean);

    // Walk right-to-left: the rightmost non-private address is the last hop
    // appended by infrastructure we trust, not the client-supplied value.
    for (let i = hops.length - 1; i >= 0; i--) {
      if (!PRIVATE_IP_RE.test(hops[i])) {
        return hops[i];
      }
    }
  }

  return "unknown";
}
