import { NavLink, Outlet } from "react-router-dom";
import { FaUserPlus, FaWallet, FaHome, FaBookOpen, FaHandHoldingMedical, FaHandHolding, FaHandHoldingHeart } from "react-icons/fa";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();

  const isAdmin = true;
  const isInstructor = true;
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
              <li>
                <NavLink to="/dashboard/mycart">
                  <FaHandHoldingMedical></FaHandHoldingMedical> Manage Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allusers">
                  <FaHandHoldingHeart></FaHandHoldingHeart> All Users
                </NavLink>
              </li>
            </>
          ) 
          : isInstructor ? 
          <>
            <li>
                <NavLink to="/dashboard/mycart">
                  <FaBookOpen></FaBookOpen> Add A Class
                </NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/mycart">
                  <FaHandHolding></FaHandHolding> My Classes
                </NavLink>
            </li>
          </> 
          : (
            <>
              <li>
                <NavLink to="/dashboard/mycart">
                  <FaUserPlus></FaUserPlus>My Class
                  <span className="badge">+{cart?.length || 0}</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <FaWallet></FaWallet> Payment history
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
