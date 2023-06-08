import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Classes = () => {
  const [classes, setClasses] = useState([]);
//   const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
        // setLoading(false);
      });
  }, []);

  return (
    <div className="pt-24 pb-8">
        <SectionTitle
                heading={"All Classes"}
                subHeading={"the language hub"}
        ></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {classes.map((item) => (
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
                <button className="btn btn-md btn-outline btn-success">
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
