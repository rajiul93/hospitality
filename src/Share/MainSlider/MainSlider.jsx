import 'animate.css';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./MainSlider.css";
 
const MainSlider = () => {
  
  return (
    <div className="z-1 MainSliderBody md:mt-14 rounded-2xl overflow-hidden font-one">
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
        speed={3500}
        className="mySwiper"
      >
        <SwiperSlide className="rounded-2xl z-1 ">
          <div className="hero min-h-screen bg-[#0284c7]  md:px-8 md:rounded-2xl ">
            <div     className="hero-content flex-col lg:flex-row-reverse ">
              <img
             
                src="https://i.ibb.co/D52wth8/4.jpg"
                className="z-1 md:max-w-xl h-26 rounded-lg shadow-2xl animate__animated animate__swing "
              />
              <div className="text-start">
                <h1 className="lg:text-5xl font-bold font-one animate__animated animate__swing  text-white">Find Your Place <br /> of Dream </h1>
                <p className="py-6 max-w-xl animate__animated animate__backInLeft animate__delay-2s main-font text-white">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button  className="btn btn-primary  ">Visit Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero min-h-screen bg-[#0284c7]  md:px-8 rounded-lg">
            <div    className="hero-content flex-col lg:flex-row-reverse p-2">
              <img
                src="https://i.ibb.co/9842YHv/5.jpg"
                className="z-1 md:max-w-xl h-26 rounded-lg shadow-2xl animate__animated animate__swing"
              />
              <div className="text-start">
              <h1 className="lg:text-5xl font-bold font-one animate__animated animate__swing  text-white">Find Your Place <br /> of Dream </h1>
              <p className="py-6  max-w-xl animate__animated animate__backInLeft animate__delay-2s main-font text-white">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button  className="btn btn-primary">Visit Now</button>

              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero min-h-screen bg-[#0284c7] md:px-8 rounded-lg">
            <div     className="hero-content flex-col  lg:flex-row-reverse">
              <img
                src="https://i.ibb.co/dLTD8qd/55.jpg"
                className="md:max-w-xl h-24 rounded-lg shadow-2xl animate__animated animate__swing"
              />
              <div className="text-start">
              <h1 className="lg:text-5xl font-bold font-one animate__animated animate__swing  text-white">Find Your Place <br /> of Dream </h1>

              <p className="py-6  max-w-xl animate__animated animate__backInLeft animate__delay-2s main-font text-white">
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
