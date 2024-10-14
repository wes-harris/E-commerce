import { Button } from '@mui/material';
import { Product } from '../../app/models/product';
import ProductList from '../catalog/Productlist';

interface Props {
  products: Product[];
  addProduct: () => void;
}

export default function Catalog({ products, addProduct }: Props) {
  return (
    <>
      <ProductList products={products} />
      <Button variant="contained" onClick={addProduct}>
        Add product
      </Button>
    </>
  );
}
