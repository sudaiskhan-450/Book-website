const Cart = ({ cart, removeFromCart }) => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold">Cart</h2>

      {cart.length === 0 && <p>No items in cart</p>}

      {cart.map((item) => (
        <div key={item.id} className="border p-2 flex justify-between">
          <span>
            {item.title} - {item.price} PKR
          </span>

          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;