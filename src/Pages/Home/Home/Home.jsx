import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Slider from "../Slider/Slider";
import Xtraa from "../Xtraa/Xtraa";


const Home = () => {
    return (
        <div>
           <Slider></Slider>
           <div >
           <PopularClasses></PopularClasses>
           </div>
           <PopularInstructors></PopularInstructors>
           <Xtraa></Xtraa>
           {/* TODO: animation in dashboard section */}
        </div>
    );
};

export default Home;