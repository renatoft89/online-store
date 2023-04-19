import React, { useEffect, useState } from 'react';
import StoreContext from './StoreContext';
import PropTypes from 'prop-types';
import { requestProductsCategories } from '../services/api';

function StoreProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [checkedCategory, setCheckedCategory] = useState('');
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [auth, setAuth] = useState({"token": false});


  useEffect(() => {
    const getCategories = async () => {
      const data = await requestProductsCategories(`search?category=${checkedCategory}&q=${searchValue}`);
      setProducts(data.results);
    };
    getCategories();
  }, [checkedCategory, setCategories, searchValue]);

  const data = {
    categories,
    setCategories,
    checkedCategory,
    setCheckedCategory,
    products,
    setProducts,
    searchValue,
    setSearchValue,
    auth,
    setAuth,
  };

  return (
    <StoreContext.Provider value={ data }>
      { children }
    </StoreContext.Provider>
  );
}

StoreProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default StoreProvider;