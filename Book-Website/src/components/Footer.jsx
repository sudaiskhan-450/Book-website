import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Footer = () => {
  return (
    <motion.footer
      className="bg-[#020617] text-gray-300 px-6 py-12 mt-10"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <motion.div variants={item}>
          <h1 className="text-white text-2xl font-bold mb-4">Book.com</h1>
          <p className="text-sm mb-3">
            A curated collection of Pashto poetry and revolutionary literature.
          </p>

          <p className="text-sm">👤 Muhammad Sudais Khan</p>
          <p className="text-sm">📧 sudaiskhan45045@gmail.com</p>
        </motion.div>

        {/* Links */}
        <motion.div variants={item}>
          <h2 className="text-white font-semibold mb-4">Explore</h2>
          <ul className="space-y-2 text-sm">
            {["Pashto Poetry", "Revolution", "History", "Philosophy"].map((link, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a href="#" className="hover:text-red-500">{link}</a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Account */}
        <motion.div variants={item}>
          <h2 className="text-white font-semibold mb-4">Account</h2>
          <ul className="space-y-2 text-sm">
            {["Login", "Sign Up", "Cart", "Orders"].map((link, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a href="#" className="hover:text-red-500">{link}</a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div variants={item}>
          <h2 className="text-white font-semibold mb-4">Stay Updated</h2>
          <p className="text-sm mb-4">
            Get updates on new books and offers.
          </p>

          <div className="flex overflow-hidden rounded">
            <input
              type="email"
              placeholder="Enter email"
              className="w-full px-3 py-2 bg-[#1E293B] text-white outline-none focus:ring-2 focus:ring-red-500"
            />

            <motion.button
              whileHover={{
                backgroundColor: "#b91c1c",
                boxShadow: "0px 0px 15px rgba(255,0,0,0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 px-4 py-2"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Bottom */}
      <motion.div
        className="border-t border-gray-700 mt-10 pt-6 text-center text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        © {new Date().getFullYear()} Books.com. All rights reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;