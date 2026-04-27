import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Nav = ({ cart }) => {
  const [open, setOpen] = useState(false);

  const menuItem = {
    whileHover: { y: -2 },
  };

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 flex shadow-2xl px-5 text-white bg-[#1E293B] justify-between items-center p-5"
    >
      
      {/* Logo */}
      <motion.h1
        className="text-3xl font-bold"
        whileHover={{ scale: 1.05 }}
      >
        Book.com
      </motion.h1>

      {/* Desktop Menu */}
      <div className="hidden font-semibold whitespace-nowrap md:flex items-center gap-10">

        {["Book Type", "Recommendation", "Popular", "Pashto"].map((item, i) => (
          <motion.a
            key={i}
            href="#"
            variants={menuItem}
            whileHover="whileHover"
            className="relative group"
          >
            {item}

            {/* Underline animation */}
            <span className="absolute left-0 -bottom-1 w-0 h-2 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
          </motion.a>
        ))}

        {/* 🛒 CART */}
        <div className="relative flex items-center gap-1">
          🛒 Cart
          
          <motion.span
            key={cart?.length}
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="ml-2 bg-red-500 text-white px-2 py-0.5 rounded-full text-sm"
          >
            {cart?.length || 0}
          </motion.span>
        </div>

        <motion.button whileHover={{ scale: 1.05 }}>
          Login
        </motion.button>

        <motion.button
          whileHover={{
            scale: 1.08,
            boxShadow: "0px 0px 15px rgba(0,0,0,0.6)",
          }}
          whileTap={{ scale: 0.95 }}
          className="whitespace-nowrap bg-black text-white px-4 py-2 rounded-3xl"
        >
          Start for free
        </motion.button>
      </div>

      {/* Mobile Button */}
      <motion.button 
        className="md:hidden text-2xl"
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.9 }}
      >
        ☰
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-white text-black font-semibold shadow-md flex flex-col items-center gap-5 py-5 md:hidden"
          >
            
            {["Book Type", "Recommendation", "Popular", "Pashto"].map((item, i) => (
              <motion.a
                key={i}
                href="#"
                onClick={() => setOpen(false)}
                whileHover={{ scale: 1.05 }}
              >
                {item}
              </motion.a>
            ))}

            {/* 🛒 CART MOBILE */}
            <motion.div
              key={cart?.length}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
            >
              🛒 Cart: {cart?.length || 0}
            </motion.div>

            <button>Login</button>

            <motion.button
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-4 py-2 rounded-3xl"
            >
              Start for free
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Nav;