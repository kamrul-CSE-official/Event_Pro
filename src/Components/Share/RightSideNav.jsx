import { useContext, useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "tailwindcss/tailwind.css";
import { AuthContext } from "../../Providers/AuthProvider";

export default function RightSideNav() {
  const [seconds, setSeconds] = useState(60);
  const [selectedDate, setSelectedDate] = useState(null);
  const { user, logOut, signUpWithGoogle } = useContext(AuthContext);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => (prevSeconds > 1 ? prevSeconds - 1 : 60));
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const time = seconds.toString().padStart(2, "0");

  const sighnUpGoogle = () => {
    signUpWithGoogle()
      .then()
      .catch((error) => console.log(error));
  };
  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <div className="mx-auto text-center md:sticky left-0 top-0 z-10 md:mt-5">
      <h3 className="text-xl font-bold my-3">Our Next Event Will Start</h3>
      <div className="flex gap-5 font-bold">
        <div>
          <span className="countdown font-mono text-4xl">
            <span style={{ "--value": 15 }}></span>
          </span>
          days
        </div>
        <div>
          <span className="countdown font-mono text-4xl">
            <span style={{ "--value": 10 }}></span>
          </span>
          hours
        </div>
        <div>
          <span className="countdown font-mono text-4xl">
            <span style={{ "--value": 24 }}></span>
          </span>
          min
        </div>
        <div className="text-primary">
          <span className="countdown font-mono text-4xl">
            <span style={{ "--value": time }}>
              {seconds.toString().padStart(2, "0")}
            </span>
          </span>
          sec
        </div>
      </div>
      {/* Clander */}
      <div className="w-64 mx-auto mt-5">
        <label className="block text-sm font-medium text-gray-700">
          Select a Date
        </label>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="dd/MM/yyyy"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          inline // Show the calendar by default without an input field
        />
      </div>
      <div className="hidden md:block mt-2">
        <h3 className="text-xl font-bold text-center">
          An Effective Event Can Change Your Life
        </h3>
        {!user ? (
          <ul className="space-y-2 mt-2">
            <li onClick={sighnUpGoogle} className="btn w-full">
              <FcGoogle /> Google
            </li>
            <li className="btn w-full">
              <FaGithub /> Github
            </li>
          </ul>
        ) : (
          <ul className="space-y-2 mt-1 border-4 p-1">
            <li className="flex items-center justify-center gap-3">
              <span>
                <CgProfile size={40} />
              </span>
              <span>{user.email}</span>
            </li>
            <li onClick={handleLogout} className="btn btn-warning">
              Logout
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
