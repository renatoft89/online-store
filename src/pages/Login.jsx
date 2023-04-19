import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import StoreContext from "../contexts/StoreContext";
import "../styles/Login.css";
import { setUserLocalStorage } from "../utils/localStorage";


function Login() {
  const navigate = useNavigate()
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { auth, setAuth } = useContext(StoreContext);


  const handleChange = ({ target: { name, value } }) => {
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(email);
    if (email === 'renatoft89@gmail.com') {
      setAuth({"token": true})
      setUserLocalStorage({ email })
    }
  };

  const handleRegistration = (event) => {
    event.preventDefault();
    navigate("/register")
  };

  
  if (auth.token) return <Navigate to="/" />;
    
  return (
    <>
      <main>
        <Header />
        <form className="form-login">
          <fieldset>
            <legend>My Store</legend>
            <label>
              Email:
              <input
                type="email"
                value={ email }
                name="email"
                onChange={handleChange} />
            </label>
            <label>
              Senha:
              <input
                type="password"
                value={password}
                onChange={handleChange} />
            </label>
            <div className="button-container">
              <button 
                type="submit"
                onClick={handleLogin}
                className="button-login"
              >Entrar</button>
              <button onClick={(handleRegistration)}>Registrar</button>
            </div>
          </fieldset>
        </form>
      </main>
      <Footer />
    </>
  );
}

export default Login;
