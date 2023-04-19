import React, { useContext } from 'react';
import SearchProducts from '../components/SearchProducts'
import '../styles/Header.css'

import Icon from '@mdi/react';
import { mdiAccount } from '@mdi/js';
import StoreContext from '../contexts/StoreContext';
import { getUserLocalStorage } from '../utils/localStorage';

function Header() {
  const { auth, setAuth } = useContext(StoreContext);
  const user = getUserLocalStorage()
  
  return (
    <header>
      <nav>
        <h1>My Store</h1>
        <SearchProducts />
        <ul>
          <section className='user-profile'>
            {
              auth.token 
              ? 
              <>
              <Icon path={mdiAccount}
              title="User Profile"
              size={1}
              color="gray"
            />
              <span className='span-user'>{ user }</span><button
                  type="submit"
                  onClick={() => setAuth({ "token": false })}
                  className="button-login"
                >
                  Sair
                </button>
              </>
              : 
              <span></span>
            }
          </section>
        </ul>
      </nav>
    </header>
  );
}

export default Header;