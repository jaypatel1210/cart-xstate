import {
  Container,
  ListGroup,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from 'reactstrap';
import CartMachineContext from '../context/CartActorContext';
import Header from '../components/Header';
import { FunctionComponent } from 'react';
import { CartItemProps } from './components/CartItem';

type CartProps = {
  CartItem: FunctionComponent<CartItemProps>;
};

const Cart = ({ CartItem }: CartProps) => {
  const cartItems = CartMachineContext.useSelector(
    state => state.context.items
  );

  const { send } = CartMachineContext.useActorRef();

  const totalAmount = cartItems.reduce(
    (acc, current) => acc + current.price,
    0
  );

  const handleRemoveFromCart = (id: string) => {
    send({
      type: 'REMOVE_ITEM',
      value: { id },
    });
  };

  const handleCheckout = () => {
    send({
      type: 'CHECKOUT',
    });
  };

  return (
    <Container fluid>
      <Header title={<h1 className="text-success">Your Cart</h1>} />
      <ListGroup>
        {cartItems.map(item => (
          <CartItem
            key={item.id}
            item={item}
            handleRemoveFromCart={handleRemoveFromCart}
          />
        ))}
      </ListGroup>
      {cartItems.length > 0 ? (
        <Card className="text-center mt-3">
          <CardHeader>Grand Total</CardHeader>
          <CardBody>
            Your amount for {cartItems.length} product is <b>₹{totalAmount}</b>
          </CardBody>
          <CardFooter>
            <Button color="success" onClick={handleCheckout}>
              Checkout <strong>₹{totalAmount}</strong>
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <h3 className="text-warning">Cart is Empty</h3>
      )}
    </Container>
  );
};

export default Cart;
