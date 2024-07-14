import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import { IProduct } from "../utils/lib";

const Products = () => {
  const { products, setProducts } = useProducts();
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("asc");
  const [skip, setSkip] = useState(0);
  const [maxPrice, setMaxPrice] = useState<number | string>("0");
  const [total, setTotal] = useState(0);
  const [error, setError] = useState<{
    type: "category" | "products";
    message: string;
  } | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const productsResponse = await fetch(
          `https://dummyjson.com/products/search?q=${search}&select=brand,category,description,id,images,price,rating,reviews,tags,thumbnail,title&sortBy=price&order=${sort}&limit=30&skip=${
            skip * 30
          }`
        );

        if (!productsResponse.ok) {
          throw new Error("Failed to fetch products");
        }

        const productsData: {
          products: IProduct[];
          limit: number;
          skip: number;
          total: number;
        } = await productsResponse.json();

        setProducts(productsData.products);
        setTotal(productsData.total);
        setError(null); // Reset error on successful fetch
      } catch (err) {
        if (err instanceof Error) {
          setError({ type: "products", message: err.message });
        }
      }
    })();
  }, [search, sort, skip, setProducts]);

  const filteredProducts: IProduct[] = useMemo(
    () =>
      products.filter((product) => {
        const filteredPricedProd = Number(maxPrice)
          ? Number(product.price) <= Number(maxPrice)
          : true;
        return filteredPricedProd;
      }),
    [maxPrice, products]
  );

  return (
    <div className="flex justify-center items-center md:items-start">
      <div className="px-2 min-h-full bg-skin-300 flex flex-col justify-between container">
        {/* Search Component */}
        <div className="my-4">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="search title ..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 rounded outline-none text-md max-w-[500px] w-full"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-start items-center gap-4 my-4">
          {/* Price Sort component */}
          <div>
            <label
              className="block text-sm font-semibold mb-2"
              htmlFor="maxPrice"
            >
              Price Range
            </label>
            <input
              type="text"
              name="maxPrice"
              placeholder="1000.00"
              value={maxPrice}
              onChange={(e) =>
                setMaxPrice(e.target.value ? Number(e.target.value) : "0")
              }
              className="px-4 py-2 rounded border font-small text-md outline-none"
            />
          </div>
          {/* Sort Component */}
          <div>
            <label
              className="block text-sm font-semibold mb-2"
              htmlFor="custom-select"
            >
              Sort:
            </label>
            <select
              id="custom-select"
              className="w-full px-4 py-2 border border-skin-700 rounded-md bg-skin-100 text-skin-700 focus:outline-none focus:ring-2 focus:ring-skin-700"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </select>
          </div>
        </div>

        {/* Error Handling */}
        {error?.type === "products" && error.message && (
          <div className="bg-red-500 text-white p-4 rounded mb-4">
            {error.message}
          </div>
        )}

        {/* Data component */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 flex-3 my-4">
          {filteredProducts.map((product) => (
            <Link
              to={`/products/${product.id}`}
              key={product.id}
              className="border-white p-4 rounded shadow-md border-2"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-48 object-cover mb-4 rounded transition-transform transform hover:scale-110 duration-300"
              />
              <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-700 mb-2">{product.brand}</p>
              <p className="text-gray-900 font-bold mb-2">${product.price}</p>
              <p className="text-gray-600">{product.description}</p>
            </Link>
          ))}
        </div>

        {/* Pagination Component */}
        <div className="my-4 flex justify-center items-center gap-4">
          {skip > 0 && (
            <button
              onClick={() => setSkip((prev) => prev - 1)}
              className="bg-skin-500 text-skin-700 px-4 py-2 rounded text-md font-semibold border-2 border-skin-700"
            >
              Prev
            </button>
          )}
          {(skip + 1) * 30 < total && (
            <button
              onClick={() => setSkip((prev) => prev + 1)}
              className="bg-skin-500 text-skin-700 px-4 py-2 rounded text-md font-semibold border-2 border-skin-700"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
