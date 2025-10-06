// src/services/api.js
import axios from 'axios';

// 👉 Có thể dùng cho API thật nếu bạn có backend
const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE || '/',
  timeout: 8000,
});

// ✅ Lấy danh sách sản phẩm từ file JS cục bộ
export const fetchProducts = async () => {
  const module = await import('../data/products.js');
  return { data: module.default };
};

// ✅ Lấy 1 sản phẩm theo ID
export const fetchProductById = async (id) => {
  const res = await fetchProducts();
  const found = res.data.find((p) => String(p.id) === String(id));
  if (!found) throw new Error('Product not found');
  return { data: found };
};

export default api;
