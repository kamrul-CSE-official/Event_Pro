import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Navbar from "../../Components/Share/Navbar";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const { createUser, signUpWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    createUser(email, password)
      .then((res) => {
        console.log(name, "Successfully regester. Your email:", res.email);
        setError("");
        navigate("/home");
      })
      .catch((error) => setError(error));
  };
  const handleGoogleSichUp = () => {
    signUpWithGoogle()
      .then((res) => {
        console.log("Hi, ", res.email);
        setError("");
        navigate("/home");
      })
      .catch((error) => {
        setError(error);
        alert("er");
      });
  };
  console.log("NEE: ", error);
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <div className="card shrink-0 w-full max-w-sm mx-auto shadow-2xl bg-base-100">
        <h2 className="text-2xl font-bold text-center">
          Please Create An Account
        </h2>
        <form onSubmit={handleSignUp} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            {error && (
              <p className="text-red-500">
                Something wrong maybe this Email you already used or another
                internal issues, please try again with another email.
              </p>
            )}
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Regester</button>
          </div>
          <button onClick={handleGoogleSichUp} className="btn btn-outline">
            <FcGoogle /> Google
          </button>
          <Link to="/login" className="btn">
            Already have an account ?
          </Link>
        </form>
      </div>
    </div>
  );
}
