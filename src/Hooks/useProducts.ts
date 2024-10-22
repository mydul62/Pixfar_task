import { useState, useEffect } from "react";
import axios from "axios";

interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
}

const useProducts = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        setAllProducts(data);
        setDisplayedProducts(data.slice(0, 8)); // Show the first 8 initially
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const fetchMoreData = () => {
    if (displayedProducts.length >= allProducts.length) {
      setHasMore(false);
      return;
    }
    const nextProducts = allProducts.slice(displayedProducts.length, displayedProducts.length + 4);
    setDisplayedProducts(prev => [...prev, ...nextProducts]);
  };

  return { allProducts, displayedProducts, fetchMoreData, hasMore, isLoading };
};

export default useProducts;
