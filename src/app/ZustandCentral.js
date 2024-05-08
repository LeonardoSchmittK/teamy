import { create } from "zustand";
import progressScript from "@/app/progressScript";
const initialState = {
  progress: 0,
  totalModals: progressScript.length,
  createNewTeam: true,
};

const useStore = create((set) => ({
  ...initialState,
  progressOn: () => set((state) => ({ progress: state.progress + 1 })),
  reset: () => set(initialState),
  initCreateNewTeam: () => set((state) => ({ createNewTeam: true })),
}));
export default useStore;
