// src/lib/store/productStore.ts
import { create } from 'zustand';
import type { UiProduct } from '@/types/product';

type State = {
  product: UiProduct | null;
  setProduct: (p: UiProduct) => void;
  ui: { trailerOpen: boolean };
  setUI: <K extends keyof State['ui']>(k: K, v: State['ui'][K]) => void;
};

export const useProductStore = create<State>()((set) => ({
  product: null,
  setProduct: (p) => set({ product: p }),
  ui: { trailerOpen: false },
  setUI: (k, v) => set((s) => ({ ui: { ...s.ui, [k]: v } })),
}));
