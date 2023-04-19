import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Register() {
  return (
    <>
      <Header />
      <form className="register-form">
        <div className="register-container">
          <h1 className="register-title">Cadastro</h1>
          <label htmlFor="nameInput" className="label-form">
            Nome
            <input
              placeholder="Seu nome"
              type="text"
              name="nameInput"
              className="name-input"
              data-testid="common_register__input-name"
              // value={ name }
              // onChange={ ({ target }) => setName(target.value) }
            />
          </label>

          <label htmlFor="emailInput" className="label-form">
            Email
            <input
              placeholder="seu-email@site.com.br"
              type="email"
              name="emailInput"
              className="email-input"
              data-testid="common_register__input-email"
              // value={ email }
              // onChange={ ({ target }) => setEmail(target.value) }
            />
          </label>

          <label htmlFor="PasswordInput" className="label-form">
            Senha
            <input
              placeholder="*******"
              type="password"
              name="passwordInput"
              className="password-input"
              data-testid="common_register__input-password"
              // onChange={ ({ target }) => setPassword(target.value) }
            />
          </label>

          <button
            className="btn-register"
            type="button"
            name="submitBTN"
            id="loggin-submit-btn"
            data-testid="common_register__button-register"
            // disabled={ }
            // onClick={ registerUser }
          >
            CADASTRAR
          </button>
          {
            // err
            //   ? (
            //     <span
            //       data-testid="common_register__element-invalid_register"
            //     >
            //       {/* { err } */}
            //     </span>
            //   ) : ''
          }
        </div>
      </form>
      <Footer />
    </>
  );
}

export default Register;