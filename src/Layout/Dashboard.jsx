import { NavLink, Outlet } from "react-router-dom";
import { FaUserPlus, FaWallet, FaHome, FaBookOpen, FaHandHoldingMedical, FaHandHolding, FaHandHoldingHeart } from "react-icons/fa";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/usedmin";
import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {
  const [cart] = useCart();

//   const isAdmin = true;
//   const isInstructor = true;
const [isAdmin] = useAdmin();
const [isInstructor] = useInstructor();
  return (
    <div className="drawer lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#4a8a9e]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 ">
          <div className="divider"></div>

          {isAdmin ? (
            <>
              <h2 className="text-3xl text-center font-bold text-cyan-900 py-4">Admin Panel</h2>
              <li>
                <NavLink to="/dashboard/manageclass">
                  <FaHandHoldingMedical></FaHandHoldingMedical> Manage Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allusers">
                  <FaHandHoldingHeart></FaHandHoldingHeart> Manage Users
                </NavLink>
              </li>
            </>
          ) 
          : isInstructor ? 
          <>
          <h2 className="text-3xl text-center font-bold text-cyan-900 py-4">Instructor Panel</h2>
            <li>
                <NavLink to="/dashboard/addclass">
                  <FaBookOpen></FaBookOpen> Add A Class
                </NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/myclass">
                  <FaHandHolding></FaHandHolding> My Classes
                </NavLink>
            </li>
          </> 
          : (
            <>
            <h2 className="text-3xl text-center font-bold text-cyan-900 py-4">Student Panel</h2>
              <li>
                <NavLink to="/dashboard/mycart">
                  <FaUserPlus></FaUserPlus>My Selected Classes
                  <span className="badge">+{cart?.length || 0}</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myenrolledclasses">
                  <FaWallet></FaWallet> My Enrolled Classes
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li className="text-lg text-cyan-900 font-bold rounded-md">
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <div className="divider"></div>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
