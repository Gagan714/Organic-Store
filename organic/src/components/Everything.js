// Everything.js
import { useState } from 'react';
import SearchBar from './SearchBar';
import products from './Products';
import Card from './Card';


function Everything() {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (searchTerm) => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <>
      <div className='flex justify-center items-start'>
        <div className='h-auto w-1/4'>
          <SearchBar onSearch={handleSearch} />
        </div>
        <div className='flex flex-wrap justify-center gap-6 h-full w-3/4'>
          {filteredProducts.map((product)=>(
            <Card key={product.id} product={product}/>
          ))
          }
        </div>
      </div>
    </>
  );
}

export default Everything;
