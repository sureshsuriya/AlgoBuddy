"use client";
import { Toaster } from "react-hot-toast";
import { usePathname } from "next/navigation";
import Chatbot from "@/app/components/ui/Chatbot";
import Navbar from "@/app/components/navbar";
import { CommandPalette } from "@/app/components/CommandPalette";
import FloatingNotesAssistant from "@/app/components/FloatingNotesAssistant";

export default function ClientLayoutWrapper({ children }) {
  const pathname = usePathname();
  const isAuthPage = pathname === "/login" || pathname === "/signup";

  return (
    <>
      <Toaster position="top-right" />
      {!isAuthPage && <Navbar />}
      {children}
      {!isAuthPage && <FloatingNotesAssistant />}
      {!isAuthPage && <Chatbot />}
      {!isAuthPage && <CommandPalette />}
    </>
  );
}