import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ items }) => {
  return (
    <div className="grid">
      {items.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};

export default ProductGrid;
