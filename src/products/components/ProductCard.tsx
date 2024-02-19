import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
} from 'reactstrap';
import { CartItem, Product as ProductType } from '../../types';

export type ProductCardProps = {
  product: ProductType;
  handleAddToCart: (item: CartItem) => void;
};

const ProductCard = ({ handleAddToCart, product }: ProductCardProps) => {
  return (
    <Card className="mt-2 mb-1 border border-2">
      <CardImg top height="250" width="100%" src={product.image} />
      <CardBody className="text-center">
        <CardTitle>{product.title}</CardTitle>
        <CardText color="secondary">
          Price - ₹ {Math.round(product.price)}
        </CardText>
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
      </CardBody>
    </Card>
  );
};

export default ProductCard;
