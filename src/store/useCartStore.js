import { create } from 'zustand';

export const useCartStore = create((set) => ({
  // 🛒 Danh sách sản phẩm trong giỏ — KHỞI TẠO LUÔN LÀ MẢNG RỖNG
  items: [],

  // ➕ Thêm sản phẩm vào giỏ
  addToCart: (product) =>
    set((state) => {
      const existing = state.items.find((item) => item.id === product.id);
      if (existing) {
        // Nếu đã có → tăng số lượng
        return {
          items: state.items.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      } else {
        // Nếu chưa có → thêm mới
        return { items: [...state.items, { ...product, quantity: 1 }] };
      }
    }),

  // ➖ Xóa 1 sản phẩm khỏi giỏ
  removeFromCart: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),

  // 🔄 Cập nhật số lượng
  updateQuantity: (id, quantity) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      ),
    })),

  // 🧹 Xóa toàn bộ giỏ hàng
  clearCart: () => set({ items: [] }),
}));
