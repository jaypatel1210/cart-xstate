import { Button } from 'reactstrap';
import Layout from '../components/Layout';
import Products from '../products/Products';
import CartActorContext from '../context/CartActorContext';
import Product from '../products/components/ProductList';
import { useState } from 'react';
import Drawer from '../components/Drawer';
import Cart from '../cart/Cart';
import CartItem from '../cart/components/CartItem';

const Home = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartOpen = () => setIsCartOpen(true);
  const handleCartClose = () => setIsCartOpen(false);

  const Header = (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="navbar-brand text-white" href="#">
                Cart App
              </a>
            </li>
          </ul>
          <div>
            <Button onClick={handleCartOpen}>CART</Button>
          </div>
        </div>
      </div>
    </nav>
  );

  const Col1 = (
    <CartActorContext.Provider>
      <Products Product={Product} colSize={6} />
      {isCartOpen ? (
        <Drawer
          open={isCartOpen}
          handleClose={handleCartClose}
          direction="right"
        >
          <Cart CartItem={CartItem} />
        </Drawer>
      ) : null}
    </CartActorContext.Provider>
  );

  return <Layout col1={Col1} header={Header}></Layout>;
};

export default Home;
