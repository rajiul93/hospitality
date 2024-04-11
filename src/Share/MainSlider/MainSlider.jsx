import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./MainSlider.css";

const MainSlider = () => {
  return (
    <div className="MainSliderBody md:mt-14 rounded-2xl overflow-hidden font-one">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        speed={2500}
        className="mySwiper"
      >
        <SwiperSlide className="rounded-2xl ">
          <div className="hero min-h-screen md:bg-[#0284c7]  md:px-8 md:rounded-2xl ">
            <div className="hero-content flex-col lg:flex-row-reverse ">
              <img
                src="https://i.ibb.co/3F79CxX/33.jpg"
                className="md:max-w-xl h-24 rounded-lg shadow-2xl"
              />
              <div className="text-start">
                <h1 className="lg:text-5xl font-bold font-one">Find Your Place <br /> of Dream </h1>
                <p className="py-6 max-w-xl main-font">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Visit Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero min-h-screen bg-[#0284c7]  md:px-8 rounded-lg">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img
                src="https://i.ibb.co/dLTD8qd/55.jpg"
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div className="text-start">
              <h1 className="text-5xl font-bold font-one">Find Your Place <br /> of Dream </h1>
              <p className="py-6 max-w-xl">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Visit Now</button>

              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero min-h-screen bg-[#0284c7] md:px-8 rounded-lg">
            <div className="hero-content flex-col  lg:flex-row-reverse">
              <img
                src="https://i.ibb.co/dLTD8qd/55.jpg"
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div className="text-start">
              <h1 className="text-5xl font-bold ">Find Your Place <br /> of Dream </h1>

              <p className="py-6 max-w-xl">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Visit Now</button>

              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainSlider;
