import { create } from "zustand";

interface ScreenNameStoreProps {
  menuItemPage: string;
  itemPage: string | string[];
  screenName: string | string[];
  setScreenName: (newState: Partial<ScreenNameStoreProps>) => void;
}

const useScreenNameStore = create<ScreenNameStoreProps>((set) => ({
  menuItemPage: "Home",
  itemPage: "Dashboard",
  screenName: "Inicio",
  setScreenName: (newState) =>
    set((state) => ({
      ...state,
      ...newState,
    })),
}));

export default useScreenNameStore;
