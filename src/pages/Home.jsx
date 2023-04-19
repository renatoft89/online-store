import React, { useContext, useEffect } from 'react';
import StoreContext from '../contexts/StoreContext';
import { requestCategories } from '../services/api';
import Category from '../components/Category';
import Header from '../components/Header';
import ListProducts from '../components//ListProducts';

import '../styles/Categories.css';
import Footer from '../components/Footer';

function Home() {
  const {
    categories,
    setCategories,
    checkedCategory,
    setCheckedCategory
  } = useContext(StoreContext
  );

  const handleChange = id => {
    setCheckedCategory(id);
  };

  useEffect(() => {
    const getCategories = async () => {
      const data = await requestCategories('categories');
      setCategories(data);
    };
    getCategories();
  }, [setCategories]);

  return (
    <>
      <Header />
      <main className="main-home">
        <section className="categories">
          {categories.map(category => (
            <Category
              key={category.id}
              id={category.id}
              category={category}
              handleChange={handleChange}
              checkedCategory={checkedCategory}
            />
          ))}
        </section>
        <ListProducts />
      </main>
      <Footer />
    </>
  );
}

export default Home;