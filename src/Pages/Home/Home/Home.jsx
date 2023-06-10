import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Slider from "../Slider/Slider";


const Home = () => {
    return (
        <div>
           <Slider></Slider>
           <PopularClasses></PopularClasses>
           <PopularInstructors></PopularInstructors>
           {/* TODO: an extra section */}
           {/* TODO: 404 without header and footer */}
           {/* TODO: animation in dashboard section */}
        </div>
    );
};

export default Home;