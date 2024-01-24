import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import data from "../api/items.json"

function App() {
  const [isCart, setIsCart] = useState(false)
  const [cartItems, setCartItems] = useState(JSON.parse(data))



  const renderPage ()=> isCart ?(
    <div>
      <button data-testid="cart-button">Show Shopping Items</button>
      <button data-testid="request-button">Request Page</button>

      <h1 data-testid="heading">Cart Items</h1>
      <div>
        <div data-testid={`title-${title}`}></div>
        <div data-testid={`price-${price}`}></div>
        <button data-testid={`removeCartButton-${title}`}>Remove From Cart</button>
      </div>
    </div>
  ) : (
    <div>
      <button data-testid="cart-button">Show Cart Items</button>
      <button data-testid="request-button">Request Page</button>

      <h1 data-testid="heading">Shopping Items</h1>
      <div>
        <div data-testid={`title-${title}`}></div>
        <div data-testid={`price-${price}`}></div>
        <button data-testid={`addCartButton-${title}`}>Add To Cart</button>
      </div>
    </div>
  )
  
  return (
    <div>
      {renderPage()}
    </div>
  );
}

export default App;
