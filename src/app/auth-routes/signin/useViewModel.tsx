import { useState } from "react";

import { useRouter } from "next/navigation";

import useAuthStore from "@/stores/auth-store";

export default function useViewModel() {
  const { push } = useRouter();
  const { setIsAuthenticated, isAuthenticated } = useAuthStore();
  const [isChecked, setIsChecked] = useState(false);

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleRememberUser = () => {
    setIsChecked(!isChecked);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    if (isAuthenticated) {
      push("/app-routes/home");
    }
  };

  const handleForgotPassword = () => {
    push("/auth-routes/forgot-password");
  };

  return {
    isChecked,
    handleRememberUser,
    handleLogin,
    handleForgotPassword,
    isPasswordVisible,
    setIsPasswordVisible,
  };
}
