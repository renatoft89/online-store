import React from 'react';
import Categories from '../components/Categories';
import ListProducts from '../components/ListProducts';
import Header from '../components/Header';


const Home = () => {
  return (
    <>
      <Header />
      <ListProducts />
      <section className="categories">
        <Categories />
      </section></>
  );
};

export default Home;