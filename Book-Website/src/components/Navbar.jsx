import React, { useState } from "react";

const Nav = ({ cart }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex shadow-2xl px-5 text-white bg-[#1E293B] rounded-sm justify-between items-center p-5">
      
      {/* Logo */}
      <h1 className="text-3xl font-bold">Book.com</h1>

      {/* Desktop Menu */}
      <div className="hidden font-semibold whitespace-nowrap md:flex items-center gap-10">
        <a href="#">Book Type</a>
        <a href="#">Recommendation</a>
        <a href="#">Popular</a>
        <a href="#">Pashto</a>

        {/* 🛒 CART ADDED HERE */}
        <div className="relative">
          🛒 Cart
          <span className="ml-2 bg-red-500 text-white px-2 py-0.5 rounded-full text-sm">
            {cart?.length || 0}
          </span>
        </div>

        <button className="px-10">Login</button>
        <button className="whitespace-nowrap bg-black text-white px-4 py-2 rounded-3xl">
          Start for free
        </button>
      </div>

      {/* Mobile Button */}
      <button 
        className="md:hidden text-2xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white text-black font-semibold shadow-md flex flex-col items-center gap-5 py-5 md:hidden">
          
          <a href="#" onClick={() => setOpen(false)}>Book Type</a>
          <a href="#" onClick={() => setOpen(false)}>Recommendation</a>
          <a href="#" onClick={() => setOpen(false)}>Popular</a>
          <a href="#" onClick={() => setOpen(false)}>Pashto</a>

          {/* 🛒 CART MOBILE */}
          <div>
            🛒 Cart: {cart?.length || 0}
          </div>

          <button>Login</button>
          <button className="bg-black text-white px-4 py-2 rounded-3xl">
            Start for free
          </button>
        </div>
      )}
    </div>
  );
};

export default Nav;