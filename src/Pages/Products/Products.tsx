import Product from "./Product/product.tsx";
import Loading from "./Loading.tsx";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice.ts";
import CartView from "../../features/cart/CartView.tsx";
import Swal from "sweetalert2";
import InfiniteScroll from "react-infinite-scroll-component";
import useProducts from "../../Hooks/useProducts.ts"

interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Products = () => {
  const { allProducts, displayedProducts, fetchMoreData, hasMore, isLoading } = useProducts();
  const [searchItem, setSearchItem] = useState<string>("");
  const [searchedProducts, setSearchedProducts] = useState<Product[] | null>(null);
  const dispatch = useDispatch();

  const handleCartAdd = (product: Product) => {
    const cartItem: CartItem = {
      id: product.id,
      name: product.title,
      price: product.price,
      quantity: 1,
      image: product.image,
    };
    dispatch(addToCart(cartItem));
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Item Added",
      showConfirmButton: false,
      timer: 1000,
    });
  };

  const handleSearch = () => {
    if (allProducts) {
      const results = allProducts.filter((product: Product) =>
        product.title.toLowerCase().includes(searchItem.toLowerCase())
      );
      setSearchedProducts(results);
    }
  };

  return (
    <div className="my-24 md:my-24 md:mt-32 container px-6 py-6 mx-auto">
      <div className="title mb-12 md:flex justify-start items-center gap-12">
        <h1 className="text-2xl font-semibold">
          {searchedProducts && searchedProducts.length > 0
            ? `Search Result (${searchedProducts.length})`
            : displayedProducts && displayedProducts.length > 0
            ? `All Products (${displayedProducts.length})`
            : "All Products (00)"}
        </h1>

        <div className="flex w-full mt-8 md:mt-0 md:w-[40%] items-center">
          <div className="border h-12 flex-grow flex">
            <input
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
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
        <InfiniteScroll
          dataLength={displayedProducts.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<Loading />}
          endMessage={<p style={{ textAlign: "center", paddingTop:'40px', fontSize:'20px' }}>You have reached all Products</p>}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(searchedProducts || displayedProducts)?.map((product: Product) => (
              <Product
                key={product.id}
                handleCartAdd={handleCartAdd}
                product={product}
              />
            ))}
          </div>
        </InfiniteScroll>
      ) : (
        <div>
          <Loading />
        </div>
      )}
      <CartView />
    </div>
  );
};

export default Products;
