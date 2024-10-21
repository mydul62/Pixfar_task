import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/Store/store';
import { setClose } from '../drower/drowerSlice';
import { BsArrowRightSquareFill } from "react-icons/bs";
import { removeCart } from './cartSlice';
import { AiTwotoneDelete } from "react-icons/ai";

const CartView= () => {
  const cart = useSelector((state: RootState) => state.cart);
  const drawer = useSelector((state: RootState) => state.drower.open);
  
  const dispatch = useDispatch()
   
  const handleRemove = (id:string) => {
    dispatch(removeCart({ id }));
  };
  
  return (
    <div
      className={`fixed top-[0px] w-full md:w-[20%] z-50 right-0 h-screen  bg-white shadow-lg transition-transform transform ${
        drawer ? 'translate-x-0' : 'translate-x-full'
      } duration-300`}
    >
     <p className='p-3 flex items-center bg-yellow-600'>
      <span 
        onClick={() => dispatch(setClose())}
        className=''
      >
       <BsArrowRightSquareFill size={20} color='white' />
      </span>
    </p>
      <div className="p-8">
        <h2 className="text-xl font-semibold">Cart</h2>
        <div className="mt-4  flex-grow overflow-y-auto max-h-[70vh]">
          {cart.items.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.items.map((item,i) => (
            
              <div key={i} className="flex justify-between gap-6 items-center border-b py-2">
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p>${item.price} x {item.quantity}</p>
                </div>
                <div>
                
                <button onClick={()=>handleRemove(item?.id)}><AiTwotoneDelete size={20}  color='red'/>
                </button>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="mt-4">
          <h3 className="font-semibold">Total: ${cart.totalPrice.toFixed(2)}</h3>
        </div>
        <button className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded">Buy Now</button>
      </div>
    </div>
  );
};

export default CartView;
