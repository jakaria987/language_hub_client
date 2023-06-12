import { useContext, useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  const {user} = useContext(AuthContext);
  const [ ,refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const classData = classes.filter(i => i.status === 'approved')
  console.log(classData);
//   const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://final-assignment-server-jakaria987.vercel.app/classes")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
        // setLoading(false);
      });
  }, []);
  const handleSelect = item => {
    console.log(item);
    if(user && user.email){
      const addItem = {userId : item._id, email: user.email, name: item.name, image: item.image, price: item.price }
      fetch('https://final-assignment-server-jakaria987.vercel.app/carts', {
        method: "POST",
        headers: {
          "content-type" : "application/json"
        },
        body: JSON.stringify(addItem)
      })
      .then(res => res.json())
      .then(data => {
        if(data.insertedId){
          refetch();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'booking confirmed',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
    }
    else{
      Swal.fire({
        title: 'Please log in for booking this item !',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login now'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', {state: {from: location}})
        }
      })
    }
  }

  return (
    <div className="pt-24 pb-8">
        <SectionTitle
                heading={"All Classes"}
                subHeading={"the language hub"}
        ></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {classData.map((item) => (
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
                <button onClick={() => handleSelect(item)} className="btn btn-md btn-outline btn-success">
                  select
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Classes;
