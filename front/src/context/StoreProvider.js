import { useEffect, useState } from "react";
import StoreContext from "./StoreContext";
import { apiGetCategories } from "../utils/axiosGetMl";



const StoreProvider = ({ children }) => {  
  const [checkedCategory, setCheckedCategory] = useState('');
  const [listProducts, setListProducts] = useState([]);
  const [valueSearch, setValueSearch] = useState('');

  useEffect(() => {
    const getCategories = async () => {
      const data = await apiGetCategories(`search?category=${checkedCategory}&q=${ valueSearch }`);
      setListProducts(data.results);
    };
    getCategories();
  }, [checkedCategory, valueSearch]);

  const data = {
    checkedCategory,
    setCheckedCategory,
    listProducts,
    setListProducts, 
    valueSearch,
    setValueSearch,
  }

  return (
    <StoreContext.Provider value={ data }>
      { children }
    </StoreContext.Provider>
  );
};

export default StoreProvider;