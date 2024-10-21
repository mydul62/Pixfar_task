import { IoIosAddCircleOutline } from "react-icons/io";

interface ProductProps {
  product: {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
  };
  handleCartAdd: (product: ProductProps['product']) => void;
}

const Product: React.FC<ProductProps> = ({ product, handleCartAdd }) => {
  return (
    <div className="overflow-hidden border  border-[#b7b4b426]">
      <div className="relative p-3">
        <img
          className="w-full h-[400px] object-cover border-b border-[#cccccc43]"
          src={product.image}
          alt={product.title}
        />
        <div className="flex absolute left-1/2 -translate-x-1/2 justify-center items-center -mt-5 ">
          <button className="px-4 py-2 bg-yellow-300 rounded-full">
            <p className="text-sm text-gray-500">${product.price}</p>
          </button>
        </div>
        <div className="absolute bg-[#4a484858] top-0 left-0 w-full h-full opacity-0 transition-opacity duration-500 hover:opacity-100 flex justify-center items-center">
          <button
            onClick={() => handleCartAdd(product)}
            className=" text-2xl bg-[#ffffff7b] flex justify-center gap-2 items-center  px-4 py-3 uppercase"
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
