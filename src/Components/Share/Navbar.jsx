import { NavLink } from "react-router-dom";
import ThemeChange from "./ThemeChange";
import logo from "../../assets/Events-Logo.png";

export default function Navbar() {
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/category">Gategory</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
      <li className="btn btn-secondary p-0 m-0">
        <NavLink to="/yourEvents">List Your Events</NavLink>
      </li>
      <li>
        <ThemeChange />
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <img src={logo} alt="logo" width={90} />
      </div>
      <div className="flex-none hidden md:block">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      {/* small device menu  */}
      <div className="dropdown dropdown-end block md:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
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
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </div>
        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          {navLinks}
        </ul>
      </div>
    </div>
  );
}
