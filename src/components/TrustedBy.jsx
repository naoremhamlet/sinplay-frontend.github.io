import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import logo1 from "../Images/logos/logo1.svg";
import logo2 from "../Images/logos/logo2.svg";
import logo3 from "../Images/logos/logo3.svg";
import logo4 from "../Images/logos/logo4.svg";
import logo5 from "../Images/logos/logo5.svg";

import SwiperCore, {
  Navigation,
  Autoplay,
  EffectCoverflow,
  Pagination,
} from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/components/navigation";
import "swiper/swiper.esm";
SwiperCore.use([Navigation, Autoplay, EffectCoverflow, Pagination]);
function TrustedBy() {
  var logos = [logo1, logo2, logo3, logo4, logo5];
  var breakpoints = {
    1024: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  };

  return (
    <div className="trusted-container">
      <h1 className="container-title">Trusted By</h1>
      <div className="trusted">
        <Swiper
          // ref={swiperRef}
          spaceBetween={10}
          slidesPerView={5}
          // centeredSlides={true}
          pagination={true}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          speed={500}
          autoHeight={false}
          grabCursor={true}
          breakpoints={breakpoints}
        >
          {logos.map((logo) => (
            <SwiperSlide>
              <img className="trusted-logo" src={logo} alt="trustedby-logo" />{" "}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default TrustedBy;
