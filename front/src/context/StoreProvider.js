import { useState } from "react";
import StoreContext from "./StoreContext";



const StoreProvider = ({ children }) => {  
  const [checkedCategory, setCheckedCategory] = useState('');

  const data = {
    checkedCategory,
    setCheckedCategory,
  }

  return (
    <StoreContext.Provider value={ data }>
      { children }
    </StoreContext.Provider>
  );
};

export default StoreProvider;