import { Helmet } from "react-helmet-async";
import CardContainerOne from "../../Share/CardContainerOne";
import MainSlider from "../../Share/MainSlider/MainSlider";

 
const Home = () => {
    return (
        <div>
          <Helmet>
            <title>VoyageVista | Home</title>
          </Helmet>
      <MainSlider/>
      <CardContainerOne/>
        </div>
    );
};

export default Home;