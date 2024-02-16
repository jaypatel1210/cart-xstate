import {
  Container,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from 'reactstrap';
import CartMachineContext from '../context/CartActorContext';

const Cart = () => {
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
      <h1 className="text-success">Your Cart</h1>
      <ListGroup>
        {cartItems.map(item => (
          <ListGroupItem key={item.id}>
            <Row>
              <Col>
                <img height={80} src={item.image} alt="icon" />
              </Col>
              <Col className="text-center">
                <div className="text-primary">{item.name}</div>
                <span className="mr-2">Price - ₹{item.price}</span>
                <Button
                  color="danger"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  Delete
                </Button>
              </Col>
            </Row>
          </ListGroupItem>
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
