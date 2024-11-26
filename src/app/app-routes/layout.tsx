"use client";

import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <Navbar />
      <div className="flex flex-col flex-1 h-full">
        <Header />
        <main className="flex-grow overflow-hidden">{children}</main>
      </div>
    </div>
  );
}
