import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Login from './pages/Login';
import Registration from './pages/Registration';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={ <Home /> } path="/home" exact />
        <Route element={ <Registration /> } path="/register" />
        <Route element={ <Login /> } path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
