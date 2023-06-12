import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";


const MyClass = () => {
    const [myClasses, setMyClasses] = useState([]);
    const {user} = useContext(AuthContext);
    useEffect(() => {
        fetch(`http://localhost:5000/myclasses?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setMyClasses(data);
        })
    },[])
    return (
        <div className="">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ml-20 w-full ">
      {myClasses.map((item) => (
        <div key={item._id}>
          <div className="flex md:flex-col-3">
            <div className="card w-96 bg-base-100 shadow-xl py-4">
              <figure>
                <img
                  className="w-[250px] h-[150px] rounded"
                  src={item.image}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title mx-auto font-bold text-center">{item.name}</h2>
                <p className="font-semibold text-center">
                  Instructor name: {item.instructorName}
                </p>
                <p className="font-semibold text-center">
                  Available seats: {item.availableSeats}
                </p>
                <p className="font-semibold text-center">
                  Price: {item.price}$
                </p>
                {
                    item.status === 'approved' ? 
                    <p className="font-semibold text-center bg-cyan-300 py-2 rounded-md">
                    {item.status}</p> 
                   : 
                   <><p className="font-semibold text-center bg-red-300 py-2 rounded-md">
                   {item.status}</p>
                 <p className="font-semibold text-center bg-red-400 py-2 rounded-md">
                   {item.feedback}
                 </p></>
                }
              
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
        </div>
    );
};

export default MyClass;