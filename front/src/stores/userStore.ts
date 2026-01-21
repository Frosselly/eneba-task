import { create } from 'zustand';

import { type UserStoreType } from '../types/types';

export const useUserStore = create<UserStoreType>((set, get) => ({
  shoppingCart: [],
  addToCart: (gameId: string) => {
    const currentCart = get().shoppingCart;
    if (!currentCart.includes(gameId)) {
      set({ shoppingCart: [...currentCart, gameId] });
    }
  },
  removeFromCart: (gameId: string) => {
    const currentCart = get().shoppingCart;
    set({ shoppingCart: currentCart.filter((id) => id !== gameId) });
  },
  wishlist: [],
  toggleWishlist: (gameId: string) => {
    const currentWishlist = get().wishlist;
    if (currentWishlist.includes(gameId)) {
      set({ wishlist: currentWishlist.filter((id) => id !== gameId) });
    } else {
      set({ wishlist: [...currentWishlist, gameId] });
    }
  },
}));

