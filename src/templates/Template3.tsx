import { Col, Container, Row } from 'reactstrap';
import Layout from '../components/Layout';
import CartActorContext from '../context/CartActorContext';
import Products from '../products/Products';
import Cart from '../cart/Cart';
import ProductCard from '../products/components/ProductCard';
import DarkCartItem from '../cart/components/DarkCartItem';

const Home = () => {
  const Col1 = (
    <CartActorContext.Provider>
      <Container fluid /* className="bg-dark" */>
        <Row>
          <Col md="8">
            <Products Product={ProductCard} />
          </Col>
          <Col md="4">
            <Cart CartItem={DarkCartItem} />
          </Col>
        </Row>
      </Container>
    </CartActorContext.Provider>
  );
  return <Layout col1={Col1} />;
};

export default Home;
