import React, { useContext, useEffect, useState } from 'react';
import { apiGetCategories } from '../utils/axiosGetMl';
import StoreContext from '../context/StoreContext';


const Categories = () => {
  const [categories, setCategories] = useState([]);
  const { checkedCategory, setCheckedCategory } = useContext(StoreContext);

  useEffect(() => {
    const getCategories = async () => {
      const data = await apiGetCategories('categories');
      setCategories(data);
    };
    getCategories();
  }, [setCategories]);

  const handleCategory = id => {
    setCheckedCategory(prevState => {
      console.log(prevState);
      if (prevState === id) {
        return null; // desmarca a categoria selecionada
      }
      return id; // marca a nova categoria selecionada
    });
  };

  return (
    <>
      {
        categories.map(category => (
          <ul key={category.id} className="category">
            <li>
              <input
                type="checkbox"
                id={category.id}
                name={category.name}
                value={category.id}
                checked={checkedCategory === category.id}
                onChange={() => handleCategory(category.id)}
              />
              {category.name}
            </li>
          </ul>
        ))
      }
    </>
  )
};

export default Categories;