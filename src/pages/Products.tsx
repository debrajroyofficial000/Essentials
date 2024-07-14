import { useEffect, useState } from "react";

export interface IReviews {
  comment: string;
  date: string;
  rating: number;
  reviewerEmail: string;
  reviewerName: string;
}
export interface IProduct {
  availabilityStatus: string;
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  minimumOrderQuantity: number;
  price: number;
  rating: number;
  reviews: IReviews[];
  tags: string[];
  thumbnail: string;
  title: string;
}

const Products = () => {
  const [products, setProducts] = useState<IProduct[]>();
  const [search, setSearch] = useState("");
  useEffect(() => {
    (async () => {
      const productsResponse = await fetch(
        `https://dummyjson.com/products/search?q=${search.toLowerCase()}&select=availabilityStatus,brand,category,description,discountPercentage,id,images,minimumOrderQuantity,price,rating,reviews,tags,thumnail,title`
      );
      const productsData: {
        products: IProduct[];
        limit: number;
        skip: number;
        total: number;
      } = await productsResponse.json();
      setProducts(productsData.products);
    })();
  }, [search]);

  return (
    <div className="flex justify-center items-center flex-col md:flex-row">
      <div className="px-2 border">{/* Sorting component */}</div>
      <div className="px-2">
        {/* product populating */}

        <div>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="search title ..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 rounded outline-none text-md "
          />
        </div>
        <div>{/* Products component */}</div>
      </div>
    </div>
  );
};

export default Products;
