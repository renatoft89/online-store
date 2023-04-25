import React, { useContext, useState } from 'react';
import StoreContext from '../context/StoreContext';


const Header = () => {
  const { setValueSearch } = useContext(StoreContext);
  const [stringSearch, setStringSearch] = useState('');

  const handleSearch = (event) => {
    setStringSearch(event.target.value);
  };

  const goSearch = () => {
    setValueSearch(stringSearch)
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

export default Header;