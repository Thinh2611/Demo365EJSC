import React, { createContext, useContext, useState } from 'react';

// Tạo context
const CartContext = createContext(null);

// Provider bọc toàn bộ ứng dụng
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // 🛒 Thêm sản phẩm vào giỏ
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // ❌ Xóa 1 sản phẩm khỏi giỏ
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // 🧹 Xóa toàn bộ giỏ
  const clearCart = () => setCart([]);

  const value = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

// Hook dùng context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('❌ useCart phải được dùng bên trong <CartProvider>');
  }
  return context;
};
