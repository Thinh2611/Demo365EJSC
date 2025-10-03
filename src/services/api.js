import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE || '/',
  timeout: 8000,
});

// Lấy danh sách sản phẩm
export const fetchProducts = async () => {
  const data = await import('../data/products');
  return { data: data.default };
};

// Lấy 1 sản phẩm theo ID
export const fetchProductById = async (id) => {
  const res = await fetchProducts();
  const found = res.data.find((p) => String(p.id) === String(id));
  if (!found) throw new Error('Product not found');
  return { data: found };
};

export default api;
