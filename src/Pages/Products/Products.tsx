import Product from "./Product/Product";
import Loading from "./Product/Loading";
import { useGetProductsQuery } from '../../Redux/api';
import { useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

const Products = () => {
  const { data: products, isLoading } = useGetProductsQuery("");
  const [searchItem, setSearchItem] = useState<string>("");
  const [searchedProducts, setSearchedProducts] = useState<Product[] | null>(null);


 



  const handleSearch = () => {
    if (products) {
      const results = products.filter((product: Product) =>
        product.title.toLowerCase().includes(searchItem.toLowerCase())
      );
      setSearchedProducts(results);
    }
  };

  return (
    <div className="my-12 md:my-24 container px-6 py-6 mx-auto">
      <div className="title mb-12 md:flex justify-start items-center gap-12">
        <h1 className="text-2xl font-semibold">
          All Products ({searchedProducts ? searchedProducts.length : products?.length || "00"})
        </h1>

        <div className="flex w-full mt-8 md:mt-0 md:w-[40%] items-center">
          <div className="border h-12 flex-grow flex">
            <input
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)} // Set the search term
              type="text"
              className="border-none outline-none px-4 w-full h-full"
              placeholder="Search products..."
            />
          </div>

          <button onClick={handleSearch} className="h-12 bg-yellow-200 px-6">
            Search
          </button>
        </div>
      </div>

      {!isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {(searchedProducts || products)?.map((product: Product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div><Loading /></div>
      )}
    </div>
  );
};

export default Products;
