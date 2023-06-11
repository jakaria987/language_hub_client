import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/usedmin";



const AdminRoute = ({children}) => {

const {user, loading} = useContext(AuthContext);
const [isAdmin, isAdminLoading] = useAdmin();
const location = useLocation();

if(loading || isAdminLoading){
    return <div className="flex justify-center items-center mt-56">
        <span className="loading loading-bars loading-lg "></span>
    </div> 
}
if(user && isAdmin){
    return children;
}

    return <Navigate to='/' state={{from : location}} replace></Navigate>
};

export default AdminRoute;