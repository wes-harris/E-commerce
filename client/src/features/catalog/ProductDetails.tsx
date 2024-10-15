import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../../app/models/product';
import axios from 'axios';

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const [product, setProducts] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/Products/${id}`)
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <h3>Loading...</h3>;

  if (!product) return <h3>Product not found</h3>;

  return <Typography variant="h2">{product.name}</Typography>;
}
