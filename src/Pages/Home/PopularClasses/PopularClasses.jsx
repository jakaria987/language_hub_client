import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ClassItem from "../../../Shared/ClassItem/ClassItem";


const PopularClasses = () => {

    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch("classes.json")
        .then(res => res.json())
        .then(data => {
            const topStudents = data.filter(item => item.students > 76);
            setClasses(topStudents)
        })
    },[])

    return (
        <div>
            <SectionTitle
                heading={"Popular Classes"}
                subHeading={"the language hub"}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    classes.map(item => <ClassItem 
                        key={item._id}
                        item={item}
                        ></ClassItem>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;