const Footer = () => {
  return (
    <footer className="bg-[#020617] text-gray-300 px-6 py-12 mt-10">
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
  <h1 className="text-white text-2xl font-bold mb-4">Book.com</h1>
  <p className="text-sm mb-3">
    A curated collection of Pashto poetry and revolutionary literature.
  </p>

  <p className="text-sm">
    👤 Muhammad Sudais Khan
  </p>
  <p className="text-sm">
    📧 sudaiskhan45045@gmail.com
  </p>
</div>

        {/* Links */}
        <div>
          <h2 className="text-white font-semibold mb-4">Explore</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-red-500">Pashto Poetry</a></li>
            <li><a href="#" className="hover:text-red-500">Revolution</a></li>
            <li><a href="#" className="hover:text-red-500">History</a></li>
            <li><a href="#" className="hover:text-red-500">Philosophy</a></li>
          </ul>
        </div>

        {/* Account */}
        <div>
          <h2 className="text-white font-semibold mb-4">Account</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-red-500">Login</a></li>
            <li><a href="#" className="hover:text-red-500">Sign Up</a></li>
            <li><a href="#" className="hover:text-red-500">Cart</a></li>
            <li><a href="#" className="hover:text-red-500">Orders</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-white font-semibold mb-4">Stay Updated</h2>
          <p className="text-sm mb-4">
            Get updates on new books and offers.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter email"
              className="w-full px-3 py-2 rounded-l bg-[#1E293B] text-white outline-none"
            />
            <button className="bg-red-600 px-3 py-2 rounded-r hover:bg-red-700">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        © {new Date().getFullYear()} Books.com. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;