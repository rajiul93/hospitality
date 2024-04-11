import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

 import { Navigate, useLocation } from 'react-router-dom';

const PrivetRout = ({children}) => {
    const location = useLocation()
    const {user}  = useContext(AuthContext)
    if (user) {
        return children
    }
    return  <Navigate state={location.pathname} to='/login'/>
};

export default PrivetRout;