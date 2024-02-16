/* eslint-disable react-hooks/exhaustive-deps */
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Spinner,
} from 'reactstrap';
import { useMachine } from '@xstate/react';
import CartMachineContext from '../context/CartActorContext';
import { CartItem } from '../types';
import productsMachine from '../machine/products.machine';
import { useEffect } from 'react';

const Products = () => {
  const [state, productSend] = useMachine(productsMachine);

  const products = state.context.products;

  const { send } = CartMachineContext.useActorRef();

  const handleAddToCart = (item: CartItem) => {
    send({
      type: 'ADD_ITEM',
      value: item,
    });
  };

  const handleRetry = () => productSend({ type: 'RETRY' });

  useEffect(() => {
    productSend({ type: 'FETCH' });
  }, []);

  if (state.matches('loading')) {
    return (
      <Container fluid>
        <h1 className="text-center text-success">Products</h1>
        <div className="text-center">
          <Spinner color="success" />
        </div>
      </Container>
    );
  }

  if (state.matches('failure')) {
    return (
      <Container fluid>
        <h1 className="text-center text-success">Products</h1>
        <div className="text-center">
          <h5>Failed to load products</h5>

          <Button color="success" onClick={handleRetry}>
            Retry
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <Container fluid>
      <h1 className="text-center text-success">Products</h1>
      <Row>
        {products.map(product => (
          <Col md={4} key={product.id}>
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
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
