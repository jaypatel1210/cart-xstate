import { Container, Row, Col } from 'reactstrap';
import Products from './components/Products';
import Cart from './components/Cart';
import CartActorContext from './context/CartActorContext';

function App() {
  return (
    <CartActorContext.Provider>
      <Container fluid>
        <Row>
          <Col md="8">
            <Products />
          </Col>
          <Col md="4">
            <Cart />
          </Col>
        </Row>
      </Container>
    </CartActorContext.Provider>
  );
}

export default App;
