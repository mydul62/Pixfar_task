import { useState } from 'react';
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Shop', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'About', href: '#' },
  ];

  return (
    <nav className="relative bg-white shadow">
      <div className="container px-6 py-6 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <a href="#">
            <h2 className="text-3xl font-medium">
              Shoping<span className="text-green-500">Ghor</span>
            </h2>
          </a>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
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

          <div className="flex justify-center md:block">
            <a className="relative text-gray-700 transition-colors duration-300 transform hover:text-gray-600" href="#">
              <FaShoppingCart className="w-5 h-5" />
              <span className="absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full"></span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
