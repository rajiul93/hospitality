import { GiFamilyHouse, GiHumanPyramid } from "react-icons/gi";

const Achievement = () => {
  return (
    <div className="">

<div className="text-center  max-w-2xl mx-auto mt-14">
        <h1 className="font-bold text-4xl mb-6">Achievement</h1>
        <p>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        </p>
      </div>
     

      <div className="md:flex justify-center gap-24 mt-14">
        <div className="flex flex-col justify-center  items-center gap-4">
          <GiFamilyHouse className="text-5xl text-green-600" />
          <p className="text-4xl font-bold">2050+</p>
          <p className="text-gray-600">Completed Property</p>
        </div>
        <div className="flex flex-col justify-center  items-center gap-4">
          <img
            className="w-14"
            src="https://resido-v2.smartdemowp.com/wp-content/uploads/2022/07/icon-5.png"
            alt=""
          />
          <p className="text-4xl font-bold">2050+</p>
          <p className="text-gray-600">Apartment Rent</p>
        </div>
        <div className="flex flex-col justify-center  items-center  gap-4">
          <GiHumanPyramid className="text-5xl text-green-600" />
          <p className="text-4xl font-bold">2050+</p>
          <p className="text-gray-600">Happy Clients</p>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
