import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },  
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Hero = () => {
  return (
    <div className="relative z-0 text-black px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-red-400 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-400 opacity-20 blur-3xl rounded-full"></div>

      {/* LEFT SIDE */}
      <motion.div
        className="md:w-1/2 text-left z-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Heading */}
        <motion.h1
          variants={item}
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
        >
          Voices of Poetry <br /> & Revolution
        </motion.h1>

        {/* ✅ FIXED PARAGRAPH (no disappearing issue) */}
        <motion.p
          variants={item}
          className="mb-6 text-lg text-gray-700"
        >
          Discover Pashto poetry, revolutionary writings, and powerful ideas
          that shaped history.
        </motion.p>

        {/* Button */}
        <motion.button
          variants={item}
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 25px rgba(255,0,0,0.7)",
          }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-red-600 text-white px-8 py-3 rounded-full relative overflow-hidden"
        >
          <span className="relative z-10">Explore Books</span>

          {/* Arrow animation */}
          <motion.span
            animate={{ x: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 0.6 }}
            className="relative z-10"
          >
            →
          </motion.span>

          {/* Shimmer */}
          <motion.div
            className="absolute inset-0 bg-white opacity-20"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          />
        </motion.button>
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        className="md:w-1/2 z-0"  // 👈 keeps it behind navbar
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src="https://www.cevagraf.coop/printing/wp-content/uploads/2023/05/Parts-of-a-Book.jpg"
          alt="books"
          className="w-full mt-10 rounded-xl shadow-2xl"
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.05, rotate: 1 }}
        />
      </motion.div>

    </div>
  );
};

export default Hero;