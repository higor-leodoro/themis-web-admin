"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import useAuthStore from "@/stores/auth-store";

export default function useViewModel() {
  const router = useRouter();
  const { isAuthenticated } = useAuthStore();

  const [visualizeList, setVisualizeList] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) return router.push("/auth-routes/signin");
  }, [isAuthenticated, router]);

  return { isAuthenticated, visualizeList, setVisualizeList };
}
