// Layout.js
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

function Layout({ children }) {
  const location = useLocation();

  const getPageDetails = () => {
    switch (location.pathname) {
      case '/everything':
        return { heading: 'Everything', title: 'Everything - My Store' };
      case '/groceries':
        return { heading: 'Groceries', title: 'Groceries - My Store' };
      case '/juice':
        return { heading: 'Juice', title: 'Juice - My Store' };
      case '/about':
        return { heading: 'About Us', title: 'About Us - My Store' };
      case '/contact':
        return { heading: 'Contact Us', title: 'Contact Us - My Store' };
      default:
        return { heading: 'Home', title: 'Home - My Store' };
    }
  };

  const { heading, title } = getPageDetails();

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div>
      <Navbar />
      <header>
        <h1>{heading}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
