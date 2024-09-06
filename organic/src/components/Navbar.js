// Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const navLinkStyles = ({ isActive }) => ({
    color: isActive ? 'green' : '', // Active link is green, others are black
    textDecoration: 'none',
  });

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
        <div className="flex justify-center items-center gap-2 text-green-700">
          <div>
            ₹<span>0.00</span>
          </div>
          <div>
            <img height={30} width={30} src="cart.svg" alt="cart" />
          </div>
        </div>
      <div>
        <img height={20} width={20} src="login.svg" alt="login" />
      </div>
      </div>
    </div>
  );
}

export default Navbar;
