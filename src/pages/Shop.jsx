import React from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import ProductGrid from '../components/ProductGrid';
import { fetchProducts } from '../services/api';
import Loading from '../components/Loading';
import { useShopStore } from '../store/useShopStore'; // ✅ Zustand


const Shop = () => {
  const location = useLocation();
  const setProducts = useShopStore((state) => state.setProducts);

  const queryParams = new URLSearchParams(location.search);
  const searchKeyword = queryParams.get('search')?.toLowerCase() || '';

  const { data, isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    onSuccess: (res) => {
      setProducts(res.data);
    },
  });

  if (isLoading) return <Loading />;
  if (isError) return <p>❌ Lỗi tải dữ liệu sản phẩm.</p>;

  const products = data?.data || [];

  const filtered = searchKeyword
    ? products.filter((item) =>
        item.name.toLowerCase().includes(searchKeyword)
      )
    : products;

  return (
    <section className="container shop-page">
      <h2 className="fade-in">🛍️ Tất cả sản phẩm</h2>

      {filtered.length === 0 ? (
        <p className="fade-in">
          Không tìm thấy sản phẩm nào phù hợp với từ khóa
          <strong> "{searchKeyword}"</strong>
        </p>
      ) : (
        <div className="product-grid fade-in">
          <ProductGrid items={filtered} />
        </div>
      )}
    </section>
  );
};

export default Shop;
