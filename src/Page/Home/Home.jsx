import { Helmet } from "react-helmet-async";
import Achievement from "../../Share/Achievement";
import CardContainerOne from "../../Share/CardContainerOne";
import GoodReviews from "../../Share/GoodReviews";
import MainSlider from "../../Share/MainSlider/MainSlider";

 
const Home = () => {
    return (
        <div>
          <Helmet>
            <title>VoyageVista | Home</title>
          </Helmet>
      <MainSlider/>
      <Achievement/>
      <CardContainerOne/>
      <GoodReviews/>
        </div>
    );
};

export default Home;