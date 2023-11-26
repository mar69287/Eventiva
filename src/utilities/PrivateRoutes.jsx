import { Outlet, Navigate } from "react-router-dom";
// import { useAuth } from "./authContext";

const PrivateRoutes = () => {
    // const { user } = useAuth()
    const user = false
    return user ? <Outlet/> : <Navigate to='/auth'/>
}

export default PrivateRoutes