import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Everything from './components/Everything';
import Groceries from './components/Groceries';
import Juice from './components/Juice';
import About from './components/About';
import Contact from './components/Contact';
import Single from './components/Single';
import CheckOut from './components/CheckOut';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/everything" element={<Everything />} />
          <Route path="/groceries" element={<Groceries />} />
          <Route path="/juice" element={<Juice />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/single" element={<Single />} /> 
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
