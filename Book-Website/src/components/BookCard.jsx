const BookCard = ({ book, addToCart }) => {
  return (
    <div className="bg-[#1E293B] w-cover h-cover text-white p-4 rounded-lg hover:scale-105 transition">
      
      <img
        src={book.image}
        alt={book.title}
        className="w-full h-48 object-cover rounded"
      />

      <h2 className="mt-3 font-bold">{book.title}</h2>
      <p className="text-gray-400">{book.author}</p>
      <p className="mt-2 font-semibold">Rs {book.price}</p>

      {/* ✅ CONNECT BUTTON */}
      <button
        onClick={() => addToCart(book)}
        className="mt-3 bg-red-600 px-4 py-2 rounded hover:bg-red-700 w-full"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default BookCard;