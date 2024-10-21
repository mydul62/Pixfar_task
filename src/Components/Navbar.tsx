import { useState } from 'react';
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/Store/store';
import { setOpen } from '../features/drower/drowerSlice';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cart = useSelector((state: RootState) => state.cart);  
  const dispatch = useDispatch()
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Shop', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'About', href: '#' },
  ];

  return (
    <nav className="w-full fixed top-0 z-50  bg-white shadow">
      <div className="container  px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <a href="#">
            <h2 className=" text-2xl md:text-3xl font-medium">
              Shoping<span className="text-green-500">Ghor</span>
            </h2>
          </a>

          {/* Mobile menu button */}
          <div className="flex items-center gap-4 lg:hidden">
          <div className="flex items-center justify-center">
            <a onClick={()=>{
             dispatch(setOpen())
             setIsOpen(false)
            }} className="relative text-gray-700 transition-colors duration-300 transform hover:text-gray-600" href="#">
              <FaShoppingCart className="w-10 h-6" />
              <span className="absolute -top-3 left-0 p-1 text-xs text-white bg-blue-500 rounded-full">{cart?.items?.length}</span>
            </a>
          </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-label="toggle menu"
            >
              {!isOpen ? <FaBars className="w-6 h-6" /> : <FaTimes className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
            isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
          }`}
        >
          {/* Navigation links */}
          <div className="flex flex-col md:flex-row md:mx-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-blue-500 md:mx-4 md:my-0 text-[20px] "
                href={link.href}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div title='View Card' onClick={()=>{
             dispatch(setOpen())
             setIsOpen(false)
            }} className=" hidden cursor-pointer md:flex items-center justify-center">
            <a  className="relative text-gray-700 transition-colors duration-300 transform hover:text-gray-600" href="#">
              <FaShoppingCart className="w-10 h-6" />
              <span className="absolute -top-3 left-0 p-1 text-xs text-white bg-blue-500 rounded-full">{cart?.items?.length}</span>
            </a>
            <p className='p-2 rounded-full bg-slate-100'>
      {cart?.totalPrice ? (Math.round(cart.totalPrice * 100) / 100).toFixed(2) : "0.00"}$
</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
