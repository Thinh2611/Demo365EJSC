import React, { useEffect, useState } from 'react';
import ProductGrid from '../components/ProductGrid';
import { fetchProducts } from '../services/api';
import Loading from '../components/Loading';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    fetchProducts()
      .then((res) => {
        if (mounted) setProducts(res.data);
      })
      .catch((err) => console.error(err))
      .finally(() => mounted && setLoading(false));
    return () => (mounted = false);
  }, []);

  if (loading) return <Loading />;

  return (
    <section className="container shop-page">
      <h2>Shop</h2>
      <ProductGrid items={products} />
    </section>
  );
};

export default Shop;
