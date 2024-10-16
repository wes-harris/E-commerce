import { useState, useEffect } from 'react';
import { Product } from '../../app/models/product';
import ProductList from '../catalog/Productlist';
import agent from '../../app/api/agent';

export default function Catalog() {
  const [products, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    agent.Catalog.list().then((products) => setProduct(products));
  }, []);

  return (
    <>
      <ProductList products={products} />
    </>
  );
}
