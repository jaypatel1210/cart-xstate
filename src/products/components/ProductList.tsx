import { Button } from 'reactstrap';
import { CartItem, Product as ProductType } from '../../types';

export type ProductListProps = {
  product: ProductType;
  handleAddToCart: (item: CartItem) => void;
};

const ProductList = ({ handleAddToCart, product }: ProductListProps) => {
  return (
    <div className="border m-2 d-flex align-items-center justify-content-between">
      <img
        className="rounded float-start"
        height="100"
        width="100"
        src={product.image}
      />
      <div className="text-center">
        <div>{product.title.substring(0, 20)}</div>
        <div color="secondary">Price - ₹ {Math.round(product.price)}</div>
      </div>
      <div>
        <Button
          color="success"
          onClick={() =>
            handleAddToCart({
              id: `cart-${product.id}`,
              name: product.title,
              price: Math.round(product.price),
              image: product.image,
            })
          }
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductList;
