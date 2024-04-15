import { Helmet } from "react-helmet-async";
import Achievement from "../../Share/Achievement";
import CardContainerOne from "../../Share/CardContainerOne";
import GoodReviews from "../../Share/GoodReviews";
import MainSlider from "../../Share/MainSlider/MainSlider";

const Home = () => {
  return (
    <div>
      <div>
        <Helmet>
          <title>VoyageVista | Home</title>
        </Helmet>
        <div className="bg-[#e2e8f0] main-font py-14">
          <div className="max-w-6xl mx-auto">
            <MainSlider />
          </div>
        </div>

        <div className="bg-white main-font py-14">
          <div className="max-w-6xl mx-auto">
            <Achievement />
          </div>
        </div>

        <div className="bg-[#e0f2fe] main-font py-14">
          <div className="max-w-6xl mx-auto">
            <CardContainerOne />
          </div>
        </div>

        <div className="bg-[#f5f3ff] main-font py-14">
          <div className="max-w-6xl mx-auto">
        <GoodReviews />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
