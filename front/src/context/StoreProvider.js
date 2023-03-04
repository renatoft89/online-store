import { useState } from "react";
import StoreContext from "./StoreContext";



const StoreProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  const data = { categories, setCategories }
  return (
    <StoreContext.Provider value={ data }>
      { children }
    </StoreContext.Provider>
  );
};

export default StoreProvider;