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
        <div>
            {myClasses.length}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                <h2 className="card-title mx-auto font-bold">{item.name}</h2>
                <p className="font-semibold text-center">
                  Instructor name: {item.instructorName}
                </p>
                <p className="font-semibold text-center">
                  Available seats: {item.availableSeats}
                </p>
                <p className="font-semibold text-center">
                  Price: {item.price}$
                </p>
                <p>
                  {item.status}
                </p>
                <p>
                  {item.feedback}
                </p>
                {/* <button onClick={() => handleSelect(item)} className="btn btn-md btn-outline btn-success">
                  select
                </button> */}
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