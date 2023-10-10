import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/header/Nav';
import CartPage from './components/pages/CartPage';
import Home from './components/pages/Home';
import SingleProduct from './components/pages/SingleProduct';
import Contact from './components/pages/Contact';
import { createContext, useState } from 'react';

const url = 'https://api.noroff.dev/api/v1/online-shop';

export const CartContext = createContext([])

function App() {
  const [cart, setCart] = useState([]);
  const value = { cart, setCart }; // Create an object with keys cart and setCart
  return (
    <div className='App'>
      <CartContext.Provider value={value}>
        <BrowserRouter>
          <h1>My Store</h1>
          <Nav />
          <Switch>
            
            <Route path="/contact">
              <Contact />
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

