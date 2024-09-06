// Layout.js
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

function Layout({ children }) {
  const location = useLocation();

  const getPageDetails = () => {
    switch (location.pathname) {
      case '/everything':
        return { heading: 'Everything', title: 'Shop - Organic Store' };
      case '/groceries':
        return { heading: 'Groceries', title: 'Groceries Archieves- Organic Store' };
      case '/juice':
        return { heading: 'Juice', title: 'Juice Archieves- Organic Store' };
      case '/about':
        return { heading: 'About Us', title: 'About Us - Organic Store' };
      case '/contact':
        return { heading: 'Contact Us', title: 'Contact Us - Organic Store' };
      default:
        return { heading: 'Home', title: 'Home - Organic Store' };
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
