import { create } from 'zustand';

export const useShopStore = create((set, get) => ({
  // 🧺 Giỏ hàng
  cart: [],
  addToCart: (product) => {
    const { cart } = get();
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      set({
        cart: cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      });
    } else {
      set({ cart: [...cart, { ...product, quantity: 1 }] });
    }
  },

  removeFromCart: (id) =>
    set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),

  clearCart: () => set({ cart: [] }),

  // 📝 Tìm kiếm sản phẩm
  searchKeyword: '',
  setSearchKeyword: (keyword) => set({ searchKeyword: keyword }),

  // 📦 Danh sách sản phẩm (fetch 1 lần)
  products: [],
  setProducts: (data) => set({ products: data }),
}));
