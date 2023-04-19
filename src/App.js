import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import PrivateRoutes from './utils/PrivateRoute';

function App() {

  return (

    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<Home />}  path="/" exact />
        </Route>
        <Route element={<Register />} path="/register" exact />
        <Route path="/login" element={<Login />} exact />
      </Routes>
    </Router>
  );
}

export default App;
