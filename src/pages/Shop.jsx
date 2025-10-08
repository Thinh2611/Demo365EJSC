import React from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import ProductGrid from '../components/ProductGrid';
import { fetchProducts } from '../services/api';
import Loading from '../components/Loading';
import { useShopStore } from '../store/useShopStore'; // ✅ Zustand để lưu sản phẩm (optional)

const Shop = () => {
  const location = useLocation();
  const setProducts = useShopStore((state) => state.setProducts);

  // 📝 Lấy từ khóa tìm kiếm từ URL (?search=...)
  const queryParams = new URLSearchParams(location.search);
  const searchKeyword = queryParams.get('search')?.toLowerCase() || '';

  // ⚡ Sử dụng TanStack Query để fetch sản phẩm
  const { data, isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    onSuccess: (res) => {
      setProducts(res.data); // ✅ lưu vào Zustand để chia sẻ toàn cục
    },
  });

  if (isLoading) return <Loading />;
  if (isError) return <p>❌ Lỗi tải dữ liệu sản phẩm.</p>;

  const products = data?.data || [];

  // 🧠 Lọc sản phẩm theo từ khóa tìm kiếm
  const filtered = searchKeyword
    ? products.filter((item) =>
        item.name.toLowerCase().includes(searchKeyword)
      )
    : products;

  return (
    <section className="container shop-page">
      <h2>🛍️ Tất cả sản phẩm</h2>

      {filtered.length === 0 ? (
        <p>
          Không tìm thấy sản phẩm nào phù hợp với từ khóa
          <strong> "{searchKeyword}"</strong>
        </p>
      ) : (
        <ProductGrid items={filtered} />
      )}
    </section>
  );
};

export default Shop;
