import { create } from "zustand";

interface AuthStoreProps {
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

const useAuthStore = create<AuthStoreProps>((set) => ({
  isAuthenticated: false,
  setIsAuthenticated: (isAuthenticated) =>
    set({ isAuthenticated: isAuthenticated }),
}));

export default useAuthStore;
