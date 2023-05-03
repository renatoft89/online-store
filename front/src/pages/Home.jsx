import React from 'react';
import ListProducts from '../components/ListProducts';
import Header from '../components/Header';
import Category from '../components/Category';


const Home = () => {
  return (
    <>
      <Header />
      <main className="main-home">
        <Category />
        <ListProducts />
      </main>
    </>
  );
};

export default Home;