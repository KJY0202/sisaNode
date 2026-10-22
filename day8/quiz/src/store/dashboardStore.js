import { create } from "zustand";

const useDashboardStore = create((set) => ({
  isLoading: false,
  isDark: false,
  font: "1",
  items: [],

  startLoading: () => set({ isLoading: true }),
  stopLoading: () => set({ isLoading: false }),

  // ② 다크 모드 전환 함수
  toggleDark: () =>
    set((state) => ({
      isDark: !state.isDark,
    })),

  // ③ 폰트 변경 함수
  changeFont: (newFont) =>
    set({
      font: newFont,
    }),

  setItems: (newItems) =>
    set({
      items: newItems,
    }),
}));

export default useDashboardStore;
