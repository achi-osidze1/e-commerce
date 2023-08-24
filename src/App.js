import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from './components/navbar/Navbar'
import Products from './pages/products/Products';
import Computers from './pages/computers/Computers';
import Phones from './pages/phones/Phones';
import Navigation from './components/navigation/Navigation';
import TV from './pages/tv/TV';
import Consoles from './pages/consoles/Consoles';
import Cart from './pages/cart/Cart';
import Context from './components/Context/Context'

function App() {

  const [cartItems, setCartItems] = useState([]);

  return (
    <>
    <div className="App">
      <Context.Provider value={{cartItems, setCartItems }}>
      <BrowserRouter>
        <Navbar />
        <Navigation />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route path="/computers" component={Computers} />
          <Route path="/phones" component={Phones} />
          <Route path="/consoles" component={Consoles} />
          <Route path="/tv" component={TV} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </BrowserRouter>
      </Context.Provider>
    </div>
    
    <style>{'body { background-color: #f6f6f6;; }'}</style>
    </>
  );
}

export default App;
