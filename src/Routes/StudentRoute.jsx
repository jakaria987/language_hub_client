import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useStudent from "../hooks/useStudent";



const StudentRoute = ({children}) => {

const {user, loading} = useContext(AuthContext);
const [isStudent, isStudentLoading] = useStudent();
const location = useLocation();

if(loading || isStudentLoading){
    return <div className="flex justify-center items-center mt-56">
        <span className="loading loading-bars loading-lg "></span>
    </div> 
}
if(user && isStudent){
    return children;
}

    return <Navigate to='/' state={{from : location}} replace></Navigate>
};

export default StudentRoute;