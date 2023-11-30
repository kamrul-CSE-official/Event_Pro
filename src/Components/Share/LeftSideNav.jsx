import { NavLink, useLocation } from "react-router-dom";

export default function LeftSideNav() {
  const location = useLocation();
  return (
    <div className="md:sticky right-0 top-0 z-10 md:mt-5">
      <h3 className="text-xl font-bold">All Caterogys</h3>
      <ul className="flex flex-row flex-wrap md:flex md:flex-col md:flex-nowrap gap-5 my-2">
        <li>
          <NavLink
            className={`btn md:w-full ${
              location.pathname.includes("/home") && "border-4 border-primary"
            }`}
            to="/home"
          >
            Fetured Events
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`btn md:w-full ${
              location.pathname.includes("/health") && "border-4 border-primary"
            }`}
            to="/healthEvents"
          >
            Health Events
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`btn md:w-full ${
              location.pathname.includes("/tech") && "border-4 border-primary"
            }`}
            to="/techEvents"
          >
            Tech Events
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`btn md:w-full ${
              location.pathname.includes("/music") && "border-4 border-primary"
            }`}
            to="/musicEvents"
          >
            Music Events
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`btn md:w-full ${
              location.pathname.includes("/marketing") &&
              "border-4 border-primary"
            }`}
            to="/marketingEvents"
          >
            Marketing Events
          </NavLink>
        </li>
      </ul>
      <div className="hidden md:block text-center space-y-2">
        <h3 className="text-center font-bold border-b-4 border-black p-1">
          Touch With Us
        </h3>
        <input
          type="text"
          placeholder="email"
          className="input input-bordered input-success w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="message"
          className="input input-bordered input-lg w-full max-w-xs"
        />
        <button className="btn btn-primary">Send</button>
      </div>
    </div>
  );
}
