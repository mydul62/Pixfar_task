import { useState, useEffect } from "react";
import { useGetProductsQuery } from "../features/productsapi/apiSlice";


interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
}
const useProducts = () => {
  const { data: products = [], isLoading } = useGetProductsQuery();
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [searchedProducts, setSearchedProducts] = useState<Product[]>([]);
  const limit = 8;

  useEffect(() => {
    if (products.length) {
      setDisplayedProducts(products.slice(0, limit)); 
    }
  }, [products]);

  const fetchMoreData = () => {
    if (displayedProducts.length >= products.length && displayedProducts) {
      setHasMore(false);
      return;
    }
    const nextProducts = products.slice(
      displayedProducts.length,
      displayedProducts.length + limit
    );
    setDisplayedProducts((prev) => [...prev, ...nextProducts]);
  };
  
  const handleSearch = (searchItem: string) => {
    if (searchItem.trim() === "") {
      setSearchedProducts([]);
      return;
    }
    
    const results = products.filter((product: Product) =>
      product.title.toLowerCase().includes(searchItem.toLowerCase())
    );
    setSearchedProducts(results);
  };

  return { handleSearch, searchedProducts, products, displayedProducts, fetchMoreData, hasMore, isLoading };
};

export default useProducts;