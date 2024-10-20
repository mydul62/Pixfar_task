const product = ({product}) => {
  return (
    <div className="overflow-hidden border-2 border-[#b7b4b426]">
              <div className="relative p-4">
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
                <div className="absolute bg-[#4a4848bf] top-0 left-0 w-full h-full opacity-0 transition-opacity duration-500 hover:opacity-100 flex justify-center items-center">
                  <button className="bg-white text-black font-medium px-4 py-2 uppercase">Add cart+</button>
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold">{product.title.slice(0,50)}</h2>
                <p className="text-sm text-gray-600">{product.description.slice(0,100)}</p>
              </div>
            </div>
  );
};

export default product;