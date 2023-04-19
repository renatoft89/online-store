import React, { useContext, useState } from 'react';
import StoreContext from '../contexts/StoreContext';
import '../styles/SearchProducts.css'

const SearchProducts = () => {
  const { setSearchValue } =useContext(StoreContext)
  const [stringSearch, setStringSearch] = useState('')

  const handleSearch = (event) => {
    setStringSearch(event.target.value);
  };

  const goSearch = () => {
    setSearchValue(stringSearch)
  }

  return (
    <section className="search-input">
      <input
        type="search"
        value={stringSearch}
        onChange={handleSearch}
        placeholder="Search"
      />
      <button
        className='btn-search'
        onClick={goSearch}
      >
        Pesquisar
      </button>
    </section>
  );
};

export default SearchProducts;
