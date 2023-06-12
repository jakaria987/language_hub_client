import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import InstructorItem from "../../../Shared/InstructorItem/InstructorItem";

const PopularInstructors = () => {

    const [instructors, setInstructors] = useState([]);
    // const classData = instructors.filter(i => i.status === 'approved')
    useEffect(() => {
        fetch("https://final-assignment-server-jakaria987.vercel.app/instructors")
        .then(res => res.json())
        .then(data => {
            setInstructors(data.slice(0,6))
        })
    },[])

    return (
        <div className="bg-cyan-200 px-4 py-4">
            <SectionTitle
                heading={"Our Instructors"}
                subHeading={"the language hub"}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    instructors.map(item => <InstructorItem
                    key={item._id}
                    item={item}
                    ></InstructorItem>)
                }
            </div>

        </div>
    );
};

export default PopularInstructors;