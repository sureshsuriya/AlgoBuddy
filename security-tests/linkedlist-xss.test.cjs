const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

function read(relPath) {
  return fs.readFileSync(path.join(__dirname, "..", relPath), "utf8");
}

test("linked list visualizers do not use innerHTML for user-controlled values", () => {
  const insertion = read(
    "app/visualizer/linkedList/operations/insertion/animation.jsx",
  );
  const deletion = read(
    "app/visualizer/linkedList/operations/deletion/animation.jsx",
  );

  for (const [name, content] of [
    ["insertion", insertion],
    ["deletion", deletion],
  ]) {
    assert.equal(
      content.includes(".innerHTML"),
      false,
      `${name} animation must not use innerHTML`,
    );
    assert.equal(
      content.includes("insertAdjacentHTML"),
      false,
      `${name} animation must not use insertAdjacentHTML`,
    );
  }
});

test("temp node builder uses textContent (no HTML parsing)", () => {
  const helper = read("app/visualizer/linkedList/utils/createTempNode.js");

  assert.ok(
    helper.includes(".textContent"),
    "createTempNode must use textContent",
  );
  assert.equal(
    helper.includes(".innerHTML"),
    false,
    "createTempNode must not use innerHTML",
  );
});

