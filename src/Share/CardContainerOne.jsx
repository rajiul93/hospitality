import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import CardOne from "./CardOne";
const CardContainerOne = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("/data2.json")
      .then((res) => res.json())
      .then((json) => setdata(json));
  }, []);

  return (
    <div className="mt-14">
      <div className="text-center  max-w-2xl mx-auto">
        <h1 data-aos="fade-up-right" className="font-bold text-4xl mb-6">Recent Property For Rent</h1>
        <p data-aos="fade-up-right">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center mt-14 ">
        {data.map((item) => (
          <CardOne  key={item.id}  item={item}/>
        ))}
      </div>
    </div>
  );
};

export default CardContainerOne;
