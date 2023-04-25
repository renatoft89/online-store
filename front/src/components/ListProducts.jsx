import React,{ useContext } from 'react';
import StoreContext from '../context/StoreContext';
import { formatReal } from '../utils/formatReal';


const ListProducts = () => {
  
  const { listProducts } = useContext(StoreContext);

  if (listProducts.length === 0) {
    return (
      <section className='not-select'>
        <p>Faça uma pesquisa...</p>
      </section>
    )
  }

  return (
    <section className='cards-product'>
      {
        listProducts.map((product) => (
          <article key={ product.id } className="product-card">
            <h2 className="product-card__title">{ product.title }</h2>
            <img className="product-card__image" src={ product.thumbnail } alt={ product.title } />
            <div className="product-card__price">{ formatReal(product.price) }</div>
            <div className="product-card__quantity">
              {/* <label htmlFor="product-quantity">{}:</label>
              <input id="product-quantity" type="number" value="1" /> */}
            </div>
          </article>
        ))
      }
    </section>
  );
};

export default ListProducts;