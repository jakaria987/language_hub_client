import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import {FaUserPlus} from 'react-icons/fa'
import useCart from "../../hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <Link to="/" className="font-bold text-lg">
          Home
        </Link>
      </li>
      <li>
        <Link to="instructors" className="font-bold text-lg">
          Instructors
        </Link>
      </li>
      <li>
        <Link to="classes" className="font-bold text-lg">
          Classes
        </Link>
      </li>
      <li>
        <Link to="/dashboard/mycart" className="font-bold text-md">
          <button className="btn btn-sm btn-info">
            <FaUserPlus></FaUserPlus>
            <div className="badge">+{cart?.length || 0}</div>
          </button>
        </Link>
      </li>

      {/* {user ? (
        <>
          <button onClick={handleLogOut} className="btn btn-info btn-sm">
            Log Out
          </button>
          <img
            className="w-10 h-10 rounded-2xl ml-4"
            src={user?.photoURL}
            alt=""
          />
        </>
      ) : (
        <>
          <li>
            <Link to="login" className="font-bold text-xl">
              Login
            </Link>
          </li>
        </>
      )} */}
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 bg-cyan-300 max-w-screen-lg ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <Link className="h-4 w-12">
            <img src={logo} alt="" />
          </Link>
          <a className="btn btn-ghost normal-case text-2xl font-bold">
            Language Hub
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          {/* <a className="btn">Button</a> */}
          {user ? (
        <>
          <button onClick={handleLogOut} className="btn btn-info btn-sm">
            Log Out
          </button>
          <img
            className="w-10 h-10 rounded-2xl ml-4"
            src={user?.photoURL}
            alt=""
          />
        </>
      ) : (
        <>
          <li>
            <Link to="login" className="font-bold text-xl">
              Login
            </Link>
          </li>
        </>
      )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
