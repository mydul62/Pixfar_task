import { useState, useEffect } from "react";
import { useGetProductsQuery } from "../features/productsapi/apiSlice";


const useProducts = () => {
  const { data: products = [], isLoading } = useGetProductsQuery();
  const [displayedProducts, setDisplayedProducts] = useState<any[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const limit = 8;

  useEffect(() => {
    if (products.length) {
      setDisplayedProducts(products.slice(0, limit)); 
    }
  }, [products]);

  const fetchMoreData = () => {
    if (displayedProducts.length >= products.length) {
      setHasMore(false);
      return;
    }
    const nextProducts = products.slice(
      displayedProducts.length,
      displayedProducts.length + limit
    );
    setDisplayedProducts((prev) => [...prev, ...nextProducts]);
  };

  return { products, displayedProducts, fetchMoreData, hasMore, isLoading };
};

export default useProducts;
