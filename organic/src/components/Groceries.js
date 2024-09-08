import { useState, useEffect } from 'react';
import { Range } from 'react-range';
import SearchBar from './SearchBar';
import products from './Products';
import Card from './Card';
import {Link} from 'react-router-dom';
const MIN = 20; 
const MAX = 500; 
const PAGE_SIZE = 6;

function Groceries() {
  const grocerie=products.filter(product=>product.category==="Groceries")
  const juice=products.filter(product=>product.category==="Juice")
  const [filteredProducts, setFilteredProducts] = useState(grocerie);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [priceRange, setPriceRange] = useState([MIN, MAX]); 


  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handlePriceChange = (values) => {
    setPriceRange(values);
  };

  useEffect(() => {
    const filtered = grocerie.filter(
      (product) =>
        (product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase())) &&
        product.price >= priceRange[0] &&  // Min price
        product.price <= priceRange[1]     // Max price
    );
    setFilteredProducts(filtered);
  }, [searchTerm, priceRange,grocerie]);
  // Calculate paginated data
  const totalPages = Math.ceil(filteredProducts.length / PAGE_SIZE);
  const paginatedProducts = filteredProducts.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  // Pagination handlers
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className='flex justify-center items-start m-5 gap-5'>
        <div className='h-auto w-1/4'>
          {/* Search Bar */}
          <SearchBar onSearch={handleSearch} />

          {/* Two-ended Price Range Filter */}
          <div>
            <div className='font-bold text-2xl mb-4'>Filter By Price</div>
            <div className='mb-4'>
              <div className='mb-5'><label>Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}</label></div>
              <Range
                step={10}
                min={MIN}
                max={MAX}
                values={priceRange}
                onChange={(values) => handlePriceChange(values)} // Update price range on change
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    style={{
                      height: '6px',
                      width: '100%',
                      background: 'lightgray',
                      borderRadius: '4px',
                      position: 'relative',
                    }}
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ props, isDragged }) => (
                  <div
                    {...props}
                    style={{
                      height: '24px',
                      width: '24px',
                      backgroundColor: 'green',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '12px',
                      position: 'absolute',
                      top: '5px', // Adjust this to align the thumbs vertically
                      cursor: 'pointer',
                    }}
                  />
                )}
              />
            </div>
          </div>
          <div className='font-medium text-xl text-green-700 flex flex-col justify-center items-start mt-10 gap-5'>
         <div><Link to="/Groceries">Groceries</Link>({grocerie.length})</div>
          <div><Link to="/Juice">Juice</Link>({juice.length})</div>
          </div>
        </div>

        <div className='w-3/4 flex flex-col justify-center items-start gap-7'>
          <div className='text-lg text-gray-500'><Link to="/">Home </Link>/ Shop</div>
          <div className='font-bold text-5xl text-green-700'>SHOP</div>

           {/* Filtered Products */}
           <div className='flex flex-wrap justify-center gap-6 h-full'>
            {paginatedProducts.length > 0 ? (
              paginatedProducts.map((product) => (
                <Card key={product.id} product={product} />
              ))
            ) : (
              <p className='text-2xl font-semibold'>No products found...!</p>
            )}
          </div>
          {/* Pagination Controls */}
          <div className='flex justify-center gap-4 mt-8'>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                className={`px-4 py-2 border rounded-md ${currentPage === index + 1 ? 'bg-green-700 text-white' : 'bg-white text-green-700'}`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Groceries;
