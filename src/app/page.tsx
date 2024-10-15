"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useAuthStore from "@/stores/auth-store";

export default function App() {
  const { isAuthenticated } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/app-routes/home");
    } else {
      router.push("/auth-routes/signin");
    }
  }, [isAuthenticated, router]);

  return null;
}
