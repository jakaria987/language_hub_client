
import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("https://final-assignment-server-jakaria987.vercel.app/instructors")
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);
      });
  }, []);
  return (
    <div className="pt-24 pb-8">
      <SectionTitle
                heading={"All Instructors"}
                subHeading={"the language hub"}
      ></SectionTitle>
    <div className="  grid grid-cols-1 md:grid-cols-3 gap-4">
      {instructors.map((item) => (
        <div key={item._id} className="">
          <div className="flex md:flex-col-3">
            <div className="card w-96 bg-base-100 shadow-xl py-4">
              <figure>
                <img className="style rounded" src={item.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title mx-auto font-bold">
                  {item.instructorName}
                </h2>
                <p className="text-center">{item.email}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Instructors;
