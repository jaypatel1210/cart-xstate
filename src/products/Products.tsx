/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Row, Col, Button, Spinner } from 'reactstrap';
import { useMachine } from '@xstate/react';
import CartMachineContext from '../context/CartActorContext';
import { CartItem } from '../types';
import productsMachine from '../machine/products.machine';
import { FunctionComponent, useEffect } from 'react';
import Header from '../components/Header';
import { ProductCardProps } from './components/ProductCard';

type ProductsProps = {
  Product: FunctionComponent<ProductCardProps>;
  colSize?: number;
};

const Products = ({ Product, colSize = 4 }: ProductsProps) => {
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
      <Header title={<h1 className="text-center text-success">Products</h1>} />

      <Row>
        {products.map(product => (
          <Col md={colSize} key={product.id}>
            <Product product={product} handleAddToCart={handleAddToCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
