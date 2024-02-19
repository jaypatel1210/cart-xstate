import { Button, Col, ListGroupItem, Row } from 'reactstrap';
import { CartItem as CartItemType } from '../../types';

export type CartItemProps = {
  item: CartItemType;
  handleRemoveFromCart: (id: string) => void;
};

const CartItem = ({ item, handleRemoveFromCart }: CartItemProps) => {
  return (
    <ListGroupItem key={item.id}>
      <Row>
        <Col>
          <img height={80} src={item.image} alt="icon" />
        </Col>
        <Col className="text-center">
          <div className="text-primary">{item.name}</div>
          <span className="mr-2">Price - ₹{item.price}</span>
          <Button color="danger" onClick={() => handleRemoveFromCart(item.id)}>
            Delete
          </Button>
        </Col>
      </Row>
    </ListGroupItem>
  );
};

export default CartItem;
