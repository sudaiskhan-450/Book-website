  import React, { useState } from 'react'
  import Navbar from './components/Navbar'
  import Hero from "./components/Hero";
  import Books from './components/Books';
  import Footer from './components/Footer';

  const App = () => {

    const [cart, setCart] = useState([]);

    // ➕ Add to cart
    const addToCart = (book) => {
      const exists = cart.find((item) => item.id === book.id);

      if (exists) {
        setCart(
          cart.map((item) =>
            item.id === book.id
              ? { ...item, qty: item.qty + 1 }
              : item
          )
        );
      } else {
        setCart([...cart, { ...book, qty: 1 }]);
      }
    };

    // ❌ Remove from cart
    const removeFromCart = (id) => {
      setCart(cart.filter((item) => item.id !== id));
    };

    return (
      <div>
        <Navbar cart={cart} />
        <Hero />
        <Books addToCart={addToCart} />
        <Footer />
      </div>
    )
  }

  export default App