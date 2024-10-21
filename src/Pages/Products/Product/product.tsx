import { IoIosAddCircleOutline } from "react-icons/io";

interface ProductProps {
  product: {
    id: string;
    title: string;
    price: number;
    description: string;
    image: string;
  };
  handleCartAdd: (product: ProductProps['product']) => void;
}

const Product: React.FC<ProductProps> = ({ product, handleCartAdd }) => {
  return (
    <div className="overflow-hidden border-2  border-[#b7b4b426] rounded-[6px]">
      <div className="relative p-3">
        <img
          className="w-full h-[400px] object-cover border-b border-[#cccccc43]"
          src={product.image}
          alt={product.title}
        />
        <div className="flex absolute top-8 md:top-[96%] -right-8 md:left-1/2 -translate-x-1/2 justify-center items-center -mt-5 ">
          <button className=" px-4 py-2 bg-yellow-300 rounded-full">
            <p className="text-sm text-gray-500">${product.price}</p>
          </button>
        </div>
        <div className="absolute md:bg-[#4a484858] rounded-t-[6px] top-0 left-0 w-full h-full md:opacity-0 transition-opacity duration-500 md:hover:opacity-100 flex justify-center md:items-center items-end">
          <button
            onClick={() => handleCartAdd(product)}
            className=" text-2xl bg-black text-white md:text-black md:bg-[#ffffff7b] flex justify-center gap-2 items-center  md:px-4 w-full  md:py-3 py-1 uppercase"
          >
            <span>Add to Cart </span><IoIosAddCircleOutline size={30} />

          </button>
        </div>
      </div>
      <div className="p-4 text-center">
        <h2 className="text-xl font-semibold">
          {product.title.slice(0, 18)}
        </h2>
        <p className="text-sm text-gray-600">
          {product.description.slice(0, 100)}
        </p>
        
      </div>
    </div>
  );
};

export default Product;
