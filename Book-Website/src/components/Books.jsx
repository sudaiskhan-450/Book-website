import { books } from "../data/books";
import BookCard from "./BookCard";

const Books = ({ addToCart }) => {
  return (
    <div className="px-6 py-10">
      <h2 className="text-white text-3xl font-bold mb-6">
        Featured Books
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <BookCard 
            key={book.id} 
            book={book} 
            addToCart={addToCart}   // 👈 IMPORTANT
          />
        ))}
      </div>
    </div>
  );
};

export default Books;