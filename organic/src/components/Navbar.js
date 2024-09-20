import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, decreaseQuantity } from './CartSlice'; // Import actions
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  const navLinkStyles = ({ isActive }) => ({
    color: isActive ? 'green' : '', // Active link is green, others are default
    textDecoration: 'none',
  });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id));
  };

  return (
    <div className="h-30 w-auto m-8 mt-3 flex justify-between items-center">
      <div className="flex justify-center items-center gap-8 font-semibold text-xl">
        {/* Logo linking to Home */}
        <div>
          <NavLink to="/" style={navLinkStyles}>
            <img
              height={160}
              width={160}
              src={`${process.env.PUBLIC_URL}/organic-store-logo5.svg`}
              alt="My SVG"
            />
          </NavLink>
        </div>
        <NavLink to="/everything" style={navLinkStyles} className="hover:text-green-700">
          Everything
        </NavLink>
        <NavLink to="/groceries" style={navLinkStyles} className="hover:text-green-700">
          Groceries
        </NavLink>
        <NavLink to="/juice" style={navLinkStyles} className="hover:text-green-700">
          Juice
        </NavLink>
      </div>

      <div className="flex justify-center items-center gap-8 font-semibold text-xl">
        <NavLink to="/about" style={navLinkStyles} className="hover:text-green-700">
          About
        </NavLink>
        <NavLink to="/contact" style={navLinkStyles} className="hover:text-green-700">
          Contact
        </NavLink>

        {/* Cart Section */}
        <div className="relative">
          <div className="flex justify-center items-center gap-2 text-green-700 cursor-pointer" onClick={toggleDropdown}>
            <div>₹<span>{totalPrice.toFixed(2)}</span></div>
            <div>
              <img height={30} width={30} src='cart.svg' alt='cart'/>
            </div>
            <span>({totalQuantity})</span>
          </div>

          {/* Cart Dropdown */}
          {isOpen && (
            <div className="absolute right-0 w-96 bg-white text-black shadow-lg rounded-lg p-4 mt-2">
              {cartItems.length === 0 ? (
                <div className="text-center">Your cart is empty</div>
              ) : (
                <>
                  <ul>
                    {cartItems.map((item) => (
                      <li key={item.id} className="flex justify-between items-center mb-2">
                        <div>
                          <span className="font-semibold">{item.name}</span>
                          <div className="text-gray-500">
                            Qty: {item.quantity}
                            <button
                              onClick={() => handleDecreaseQuantity(item.id)}
                              className="ml-2 text-red-500 hover:text-red-700"
                            >
                              <FontAwesomeIcon icon={faMinus} />
                            </button>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>₹ {item.totalPrice.toFixed(2)}</span>
                          <button
                            onClick={() => handleRemoveItem(item.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <hr className="my-2" />
                  <div className="flex justify-between items-center font-bold">
                    <span>Total:</span>
                    <span>₹ {totalPrice.toFixed(2)}</span>
                  </div>
                  <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg">
                    Buy Now
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
