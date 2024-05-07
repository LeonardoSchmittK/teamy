import { create } from "zustand";
import progressScript from "@/app/progressScript";
const initialState = {
  progress: 0,
  totalModals: progressScript.length,
};

const useStore = create((set) => ({
  ...initialState,
  progressOn: () => set((state) => ({ progress: state.progress + 1 })),
  reset: () => set(initialState),
}));
export default useStore;
