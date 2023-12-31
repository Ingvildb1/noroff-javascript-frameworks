import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/header/Nav';
import CartPage from './components/pages/CartPage';
import Home from './components/pages/Home';
import SingleProduct from './components/pages/SingleProduct';
import Contact from './components/pages/Contact';
import { createContext, useState } from 'react';
import CheckoutPage from './components/pages/CheckoutPage';

// eslint-disable-next-line no-unused-vars
const url = 'https://api.noroff.dev/api/v1/online-shop';

export const CartContext = createContext([])

function App() {
  const [cart, setCart] = useState([]);
    // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
  const updatedCart = cart.filter((item) => item.id !== itemId);
      setCart(updatedCart);
    };
  

  const value = { cart, setCart, removeFromCart }; 


  return (
    <div className='App'>
      <CartContext.Provider value={value}>
        <BrowserRouter>
          <h1>Online Shop</h1>
          <Nav />
          <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/checkout">
              <CheckoutPage /> 
            </Route>
            <Route path="/cart">
              <CartPage />
            </Route>
            <Route path="/:id">
              <SingleProduct />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <footer>Store footer</footer>
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;

