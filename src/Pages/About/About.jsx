import Footer from "../../Components/Share/Footer";
import Navbar from "../../Components/Share/Navbar";
import ceoImg from "../../assets/kamrul.png";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <div className="flex items-center justify-center gap-3">
        <img src={ceoImg} alt="CEO_pic" width={100} />
        <div>
          <h4 className="text-xl">MD.Kamrul Hasan</h4>
          <p className="font-bold">CEO at event pro</p>
          <p>+8801823855998</p>
          <p>kamrul24.official.com</p>
          <p>FB: Kamrul H. Manzur</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
