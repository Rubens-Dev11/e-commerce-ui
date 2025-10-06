import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { CartStoreActionsType, CartStoreStateType } from "@/types";

const useCartStore = create<CartStoreStateType & CartStoreActionsType>()(
  persist(
    (set) => ({
      cart: [],
      hasHydrated:false,

      addToCart: (item) =>
        set((state) => {
          const existingIndex = state.cart.findIndex(
            (p) =>
              p.id === item.id &&
              p.selectedSize === item.selectedSize &&
              p.selectedColor === item.selectedColor
          );
          if (existingIndex !== -1) {
            const updateCart = [...state.cart];
            updateCart[existingIndex].quantity += item.quantity || 1;
            return { cart: updateCart };
          }
          return {
            cart: [
              ...state.cart,
              {
                ...item,
                quantity: item.quantity || 1,
                selectedColor: item.selectedColor,
                selectedSize: item.selectedSize,
              },
            ],
          };
        }),

      removeFromCart: (item) =>
        set((state) => ({
          cart: state.cart.filter(
            (p) =>
              !(
                p.id === item.id &&
                p.selectedColor === item.selectedColor &&
                p.selectedSize === item.selectedSize
              )
          ),
        })),

      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart", // clé de stockage dans localStorage
      storage: createJSONStorage(() => localStorage), // ✅ corrigé
      onRehydrateStorage: ()=> (state)=>{
        if(state){
            state.hasHydrated = true
        }
      }
    }
  )
);

export default useCartStore;
