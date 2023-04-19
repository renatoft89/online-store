import React, { useContext } from 'react';
import StoreContext from '../contexts/StoreContext';
import '../styles/ListProducts.css';
import { formatReal } from '../utils/formatReal';

function ListProducts(props) {

  const { products } = useContext(StoreContext);

  if (products.length === 0) {
    return (
      <section className='not-select'>
        <p>Faça uma pesquisa...</p>
      </section>
    )
  }

  return (
    <section className='cards-product'>
      {
        products.map((product) => (
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
}

export default ListProducts;