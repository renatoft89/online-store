import React, { useContext, useState } from 'react';
import StoreContext from '../context/StoreContext';

import '../styles/Header.css'
import { getUserLocalStorage } from '../utils/auxLocalStorage';


const Header = () => {
  const { auth, setAuth } = useContext(StoreContext);
  const user = getUserLocalStorage
  const { setValueSearch } = useContext(StoreContext);
  const [stringSearch, setStringSearch] = useState('');

  const handleSearch = (event) => {
    setStringSearch(event.target.value);
  };

  const goSearch = () => {
    console.log(stringSearch);
    if (stringSearch === '') {
      return null
    }
    setValueSearch(stringSearch)
  }

  return (
    <header>
      <nav>
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
      </nav>
    </header>
  );
};

export default Header;