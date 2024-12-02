import { useCart } from "./CartContext";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  // Calculate Total Price
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="mt-32 px-16">
      <h1 className="text-3xl font-semibold mb-10">Your <span className="bg-gradient-to-r from-website-color-200 to-website-color-700 bg-clip-text text-transparent">Cart</span></h1>

      {cart.length > 0 ? (
        <>
          <div className="flex flex-wrap gap-10 justify-center">
            {cart.map((item, index) => (
              <div
                key={index}
                className="p-5 border rounded-lg shadow-lg flex flex-col items-center"
              >
                <div className="text-lg font-semibold">{item.name}</div>
                <div className="text-sm text-mine-shaft-300">{item.description}</div>
                <div className="text-sm font-semibold text-green-600">₹{item.price}</div>
                <button
                  className="mt-3 text-sm bg-red-500 px-3 py-1 text-white font-semibold rounded-lg hover:bg-red-700"
                  onClick={() => removeFromCart(item.name)}
                >
                  Remove
                </button>
                <button
                  className="mt-3 text-sm bg-green-500 px-3 py-1 text-white font-semibold rounded-lg hover:bg-green-700"
                  onClick={() => removeFromCart(item.name)}
                >
                  Trace
                </button>
              </div>
            ))}
          </div>

          {/* Total Price */}
          <div className="mt-10 text-xl font-bold text-right">
            Total Price: ₹{totalPrice}
          </div>
        </>
      ) : (
        <div className="text-center">Your cart is empty!</div>
      )}
    </div>
  );
};

export default CartPage;
