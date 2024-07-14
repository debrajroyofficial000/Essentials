import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartProducts } = useCart();
  return (
    <div>
      {cartProducts.map((prod) => (
        <p key={prod.id}>{prod.title}</p>
      ))}
    </div>
  );
};

export default Cart;
