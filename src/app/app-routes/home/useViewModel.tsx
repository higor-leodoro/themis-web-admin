"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

import useAuthStore from "@/stores/auth-store";

export default function useViewModel() {
  const router = useRouter();
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    if (!isAuthenticated) return router.push("/auth-routes/signin");
  }, [isAuthenticated, router]);

  return { isAuthenticated };
}
