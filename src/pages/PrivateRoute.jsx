import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({isLogged}) => {
    console.log(isLogged);
  return (
    <div>{isLogged ? <Outlet/> : <Navigate to="/login"/>   }</div>
  )
}

export default PrivateRoute;