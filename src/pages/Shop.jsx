import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';
import { fetchProducts } from '../services/api';
import Loading from '../components/Loading';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // 📝 Lấy từ khóa từ URL (?search=...)
  const queryParams = new URLSearchParams(location.search);
  const searchKeyword = queryParams.get('search')?.toLowerCase() || '';

  useEffect(() => {
    let mounted = true;

    const loadProducts = async () => {
      try {
        const res = await fetchProducts(); // 👈 trả về { data: [...] }
        if (mounted) {
          setProducts(res.data);
          setFiltered(res.data); // set mặc định khi chưa tìm kiếm
        }
      } catch (error) {
        console.error('Lỗi tải sản phẩm:', error);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    loadProducts();

    return () => (mounted = false);
  }, []);

  // 🧠 Lọc sản phẩm theo từ khóa tìm kiếm
  useEffect(() => {
    if (searchKeyword && products.length > 0) {
      const filteredItems = products.filter((item) =>
        item.name.toLowerCase().includes(searchKeyword)
      );
      setFiltered(filteredItems);
    } else {
      setFiltered(products);
    }
  }, [searchKeyword, products]);

  if (loading) return <Loading />;

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
