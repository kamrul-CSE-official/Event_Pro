import { Outlet } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Navbar from "../Components/Share/Navbar";
import Footer from "../Components/Share/Footer";
import LeftSideNav from "../Components/Share/LeftSideNav";
import RightSideNav from "../Components/Share/RightSideNav";

export default function MainLayouts() {
  return (
    <div className="max-w-6xl mx-auto">
      <Navbar />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mx-auto md:mt-5">
        <div className="">
          <LeftSideNav />
        </div>
        <div className="col-span-2 border">
          <div>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  src="https://i.ibb.co/znHSTBp/Green-Illustrative-Earth-Campaign-Event-Landscape-Banner.gif"
                  alt="banner"
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img
                  src="https://i.ibb.co/0ynyZjf/Purple-and-Pink-Illustration-Music-Party-Banner.gif"
                  alt="banner"
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img
                  src="https://i.ibb.co/XStWfnT/White-Blue-Purple-Modern-Live-Music-Banner-Landscape.gif"
                  alt="banner"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <Outlet />
        </div>
        <div>
          <RightSideNav />
        </div>
      </div>

      <Footer />
    </div>
  );
}
