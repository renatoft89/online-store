import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import StoreContext from "../contexts/StoreContext";

function PrivateRoutes() {
  const { auth } = useContext(StoreContext);

  return (
    auth.token ? <Outlet /> : <Navigate to="/login" />   
  );
}

export default PrivateRoutes;