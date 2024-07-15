import { AiFillStar, AiFillHeart } from "react-icons/ai";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import { ICartProd, useCart } from "../context/CartContext";
import { IProduct } from "../utils/lib";
import { useEffect } from "react";

const Product = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const { products } = useProducts();
  const { cartProducts, setCartProducts } = useCart();
  const targetProduct = products.find((prod) => prod.id === Number(id));

  useEffect(() => {
    if (products.length <= 0) {
      navigate("/products");
    }
  }, [id, products, navigate]);

  const handleAddToCart = (item: IProduct) => {
    const isPresent = cartProducts.some(
      (prod) => prod.cartItem.id === Number(id)
    );
    const newItem: ICartProd = { cartItem: item, qty: 1 };
    if (!isPresent) {
      setCartProducts([...cartProducts, newItem]);
    }
  };

  return (
    <div className="p-4 container mx-auto">
      <button
        className="mb-4 text-skin-700 hover:underline"
        onClick={() => navigate(-1)} // This will navigate to the previous page
      >
        &larr; Back
      </button>
      <div className="flex flex-col md:flex-row justify-center items-start gap-8">
        <div className="flex-1 border rounded-md overflow-hidden shadow-lg bg-white">
          <img
            src={targetProduct?.images[0]}
            alt={targetProduct?.title}
            className="w-full h-auto transition-transform transform hover:scale-110 duration-300"
          />
        </div>
        <div className="flex-1 p-4 bg-white rounded-md shadow-lg">
          <h2 className="text-2xl font-bold mb-2 text-skin-700">
            {targetProduct?.title}
          </h2>
          <h3 className="text-lg text-gray-700 mb-2">{targetProduct?.brand}</h3>
          <p className="text-sm text-gray-500 mb-4">
            {targetProduct?.category}
          </p>
          <p className="text-md text-gray-800 mb-4">
            {targetProduct?.description}
          </p>
          <div className="flex flex-wrap justify-start items-center gap-2 mb-4">
            {targetProduct?.tags.map((tag) => (
              <div
                key={tag}
                className="border px-4 py-2 rounded-full border-skin-700 bg-skin-100 text-skin-700"
              >
                {tag}
              </div>
            ))}
          </div>
          <div className="text-md text-gray-600 mb-2 flex items-center">
            Rating: {targetProduct?.rating}
            <AiFillStar className="text-yellow-500 ml-1" />
          </div>
          <p className="text-xl font-bold text-gray-900">
            ${targetProduct?.price}
          </p>
          {cartProducts.some((prod) => prod.cartItem.id === Number(id)) ? (
            <Link
              className="bg-skin-700 text-white px-4 py-2 rounded my-4 block text-center transition-colors duration-300 hover:bg-skin-600"
              to={"/cart"}
            >
              Go to cart
            </Link>
          ) : (
            <button
              className="bg-skin-700 text-white px-4 py-2 rounded my-4 transition-colors duration-300 hover:bg-skin-600"
              onClick={() => handleAddToCart(targetProduct as IProduct)}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
      <div className="max-w-[500px] w-full border rounded-md p-4 shadow-lg mt-8 bg-white">
        <h3 className="text-xl font-semibold mb-4">Reviews</h3>
        {targetProduct?.reviews.map((review, index) => (
          <div
            key={index}
            className="my-4 p-4 border rounded-md shadow bg-skin-50"
          >
            <div className="flex justify-between items-center mb-2">
              <div>
                <p className="font-bold text-gray-900">{review.reviewerName}</p>
                <p className="text-sm text-gray-600">{review.reviewerEmail}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">{review.date}</p>
              </div>
            </div>
            <div className="mb-2 text-gray-800">{review.comment}</div>
            <div className="text-sm text-gray-500 flex items-center">
              <AiFillHeart className="text-red-500 mr-1" />
              <span>{review.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
