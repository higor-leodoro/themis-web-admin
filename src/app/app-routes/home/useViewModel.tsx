"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

import useAuthStore from "@/stores/auth-store";

export default function useViewModel() {
  const { push } = useRouter();
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    if (!isAuthenticated) return push("/auth-routes/signin");
  }, [isAuthenticated]);

  return { isAuthenticated };
}
