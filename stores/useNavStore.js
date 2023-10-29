import { create } from "zustand";

const useNavStore = create((set) => ({
  hideSidebar: true,
  toggleSidebar: () => set((state) => ({ hideSidebar: !state.hideSidebar })),
}));

export default useNavStore;
