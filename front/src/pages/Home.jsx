import React from 'react';
import ListProducts from '../components/ListProducts';
import Header from '../components/Header';
import Category from '../components/Category';


const Home = () => {
  return (
    <>
      <Header />
      <ListProducts />
      <section className="categories">
        <Category />
      </section></>
  );
};

export default Home;