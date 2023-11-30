import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Navbar from "../../Components/Share/Navbar";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  const { login, signUpWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    login(email, password)
      .then((result) => {
        console.log("Hi, ", result.email);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => console.log("Login fail ", error));
  };
  const hendleGoogleLogin = () => {
    signUpWithGoogle()
      .then((result) => {
        console.log("Hi, ", result.email);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <div className="card shrink-0 w-full max-w-sm mx-auto shadow-2xl bg-base-100">
        <h2 className="text-2xl font-bold text-center">Please Login</h2>
        <form onSubmit={handleLogin} className="card-body">
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
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <button onClick={hendleGoogleLogin} className="btn btn-outline">
            <FcGoogle /> Google
          </button>
          <Link to="/regester" className="btn">
            Create An Account
          </Link>
        </form>
      </div>
    </div>
  );
}
