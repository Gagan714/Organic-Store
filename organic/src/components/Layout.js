// Layout.js
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

function Layout({ children }) {
  const location = useLocation();

  const getPageDetails = () => {
    switch (location.pathname) {
      case '/everything':
        return { title: 'Shop - Organic Store' };
      case '/groceries':
        return {  title: 'Groceries Archieves- Organic Store' };
      case '/juice':
        return {  title: 'Juice Archieves- Organic Store' };
      case '/about':
        return { title: 'About Us - Organic Store' };
      case '/contact':
        return { title: 'Contact Us - Organic Store' };
      default:
        return { title: 'Home - Organic Store' };
    }
  };

  const { title } = getPageDetails();

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
