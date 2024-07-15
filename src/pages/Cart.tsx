import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState } from "react";

const Cart = () => {
  const { cartProducts, setCartProducts } = useCart();
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  const handleRemoveFromCart = (productId: number) => {
    setCartProducts(
      cartProducts.filter((prod) => prod.cartItem.id !== productId)
    );
  };

  const handleDecrease = (id: number) => {
    const item = cartProducts.find((prod) => prod.cartItem.id === id);

    if (item && item.qty > 1) {
      const updatedCart = cartProducts.map((prod) =>
        prod.cartItem.id === id ? { ...prod, qty: prod.qty - 1 } : prod
      );
      setCartProducts(updatedCart);
    }
  };

  const handleIncrease = (id: number) => {
    const item = cartProducts.find((prod) => prod.cartItem.id === id);

    if (item) {
      const updatedCart = cartProducts.map((prod) =>
        prod.cartItem.id === id ? { ...prod, qty: prod.qty + 1 } : prod
      );
      setCartProducts(updatedCart);
    }
  };

  return (
    <div className="mx-auto container p-4 relative">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-skin-700 hover:underline"
      >
        &larr; Back
      </button>
      {cartProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cartProducts.map((prod) => (
            <div
              key={prod.cartItem.id}
              className="border rounded-md p-4 shadow-lg bg-white"
            >
              <img
                src={prod.cartItem.thumbnail}
                alt={prod.cartItem.title}
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h2 className="text-xl font-semibold mb-2">
                {prod.cartItem.title}
              </h2>
              <p className="text-gray-700 mb-2">{prod.cartItem.brand}</p>
              <p className="text-gray-900 font-bold mb-2">
                ${prod.cartItem.price}
              </p>
              <div className="flex items-center mb-4">
                <button
                  className="bg-gray-300 text-gray-700 px-2 py-1 rounded mr-2"
                  onClick={() => handleDecrease(prod.cartItem.id)}
                  disabled={prod.qty <= 1}
                >
                  -
                </button>
                <p className="text-md text-gray-900 mx-2">{prod.qty}</p>
                <button
                  className="bg-gray-300 text-gray-700 px-2 py-1 rounded ml-2"
                  onClick={() => handleIncrease(prod.cartItem.id)}
                >
                  +
                </button>
              </div>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded mt-4 transition-colors duration-300 hover:bg-red-600"
                onClick={() => handleRemoveFromCart(prod.cartItem.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">Your cart is empty</div>
      )}

      {cartProducts.length !== 0 && (
        <>
          <div className="mt-8 p-4 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800">
              Total:
              <span className="ml-2 text-skin-700">
                $
                {cartProducts
                  .reduce(
                    (acc, cur) => (acc += cur.cartItem.price * cur.qty),
                    0
                  )
                  .toFixed(2)}
              </span>
            </h3>
          </div>
          <div className="mt-4 flex justify-center">
            <button
              className="bg-skin-700 text-white px-6 py-3 rounded transition-colors duration-300 hover:bg-skin-600"
              onClick={() => setModal(true)}
            >
              Checkout
            </button>
          </div>
          {modal && (
            <div className="absolute w-full h-full flex justify-center items-center top-0 left-0 bg-gray-800 bg-opacity-75 z-50">
              <div className="p-8 rounded-lg bg-white shadow-lg flex flex-col justify-center items-center">
                <p className="text-lg font-semibold mb-4">
                  Your delivery is on the way!
                </p>
                <button
                  className="bg-skin-700 text-white px-4 py-2 rounded transition-colors duration-300 hover:bg-skin-600"
                  onClick={() => {
                    setCartProducts([]);
                    setModal(false);
                    navigate(-1);
                  }}
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
