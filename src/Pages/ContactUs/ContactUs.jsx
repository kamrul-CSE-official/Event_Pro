import Footer from "../../Components/Share/Footer";
import Navbar from "../../Components/Share/Navbar";

export default function ContactUs() {
  return (
    <div className="max-w-7xl m-auto">
      <Navbar />
      <div className="text-center">
        <h2 className="text-xl font-bold">Contact Us</h2>
        <p>
          We use an agile approach to test assumptions and connect with the
          needs of your audience early and often.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center justify-center">
          {/* left */}
          <div>
            <div className="grid grid-cols-2 gap-6">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">First Name</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Last Name</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Your Email</span>
                </div>
                <input
                  type="email"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Phone Number</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>
            <input
              type="text"
              placeholder="Message"
              className="input input-bordered input-lg w-full max-w-xs my-5"
            />{" "}
            <br />
            <button className="btn btn-primary">Send Message</button>
          </div>
          {/* right */}
          <div className="space-y-5">
            <div>
              <h3 className="text-lg font-bold">Company information:</h3>
              <p>Event Pro</p>
              <p>Text ID: ********</p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Company Location:</h3>
              <p>Chattogram, Bangladesh</p>
              <p>Halishar</p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Company Email:</h3>
              <p>eventpro@gamil.com</p>
              <p>Official email address</p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Company Mobile:</h3>
              <p>+880 1823855998</p>
              <p>Official mobile address</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
