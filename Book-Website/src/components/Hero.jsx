
const Hero = () => {
  return (
    <div className="text-black px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-10">
      
      {/* LEFT SIDE (TEXT) */}
      <div className="md:w-1/2 text-left">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Voices of Poetry & Revolution
        </h1>

        <p className="mb-6">
          Discover Pashto poetry, revolutionary writings, and powerful ideas
          that shaped history.
        </p>

        <button className="bg-red-600 px-6 py-3 rounded-full active:scale-97 hover:bg-red-700">
          Explore Books
        </button>
      </div>

      {/* RIGHT SIDE (IMAGE PLACEHOLDER) */}
      <div className="md:w-1/2">
        <img
          src="https://www.cevagraf.coop/printing/wp-content/uploads/2023/05/Parts-of-a-Book.jpg"
          alt="books"
          className="w-full rounded-lg"
        />
      </div>

    </div>
  );
};

export default Hero;