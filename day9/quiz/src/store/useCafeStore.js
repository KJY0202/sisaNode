import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useCafeStore = create(
  persist(
    (set) => ({
      favorites: [],
      coupon: null,
      toggleFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.includes(id)
            ? state.favorites.filter((item) => item !== id)
            : [...state.favorites, id],
        })),
      saveCoupon: (coupon) => set({ coupon }),
      clearCoupon: () => set({ coupon: null }),
    }),
    {
      name: "ondo",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ favorites: state.favorites, coupon: state.coupon }),
    }
  )
);

export default useCafeStore;
