
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Slider from "../Slider/Slider";
import Xtraa from "../Xtraa/Xtraa";


const Home = () => {

    return (
        <div>
           <Slider></Slider>
           <PopularClasses></PopularClasses>
           <PopularInstructors></PopularInstructors>
           <Xtraa></Xtraa>
        </div>
    );
};

export default Home;