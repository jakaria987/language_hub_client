import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";


const MyEnrolledClasses = () => {
    const [enrolled, setEnrolled] = useState([]);
    const {user} = useContext(AuthContext);
    useEffect(() => {
        fetch(`http://localhost:5000/myenrolledclasses?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setEnrolled(data);
        })
    },[])
    return (
        <div>
            {enrolled.length}
        </div>
    );
};

export default MyEnrolledClasses;