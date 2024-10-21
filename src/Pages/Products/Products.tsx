import Product from "./Product/product.tsx";
import Loading from "./Loading.tsx";
import { useGetProductsQuery } from '../../features/Products/productsApi.ts';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice.ts";
import CartView from "../../features/cart/CartView.tsx";
import Swal from "sweetalert2";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number; 
  image: string;
}



const Products = () => {
  const { data: products, isLoading } = useGetProductsQuery("");
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
      timer: 1000
    });
  };


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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {(searchedProducts || products)?.map((product: Product) => (
            <Product key={product.id} handleCartAdd={handleCartAdd} product={product} />
          ))}
        </div>
      ) : (
        <div><Loading /></div>
      )}
      <CartView></CartView>
    </div>
    
  );
};

export default Products;
