import React from "react";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import { useContext } from "react";


const PrivateRoute = () => {

    const {currentUser} = useContext(AuthContext)
   
    return ( 
        currentUser?<Outlet/>:<Navigate to='/Login' replace/>

     );
}
export default PrivateRoute;