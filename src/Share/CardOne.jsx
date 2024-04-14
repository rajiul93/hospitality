import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const CardOne = ({ item }) => {
  const {
    category,
    estate_title,
    segment_name,
    status,
    image,
    price,
    facilities,
    location,
    id
  } = item;


  useEffect(() => {
    // Initialize AOS
    AOS.init();
}, []);
  return (
    <div data-aos="fade-up-right"  className="flex flex-col bg-white shadow rounded p-4 h-full hover:shadow-2xl ">
      <div  className="flex flex-col max-w-lg  overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800 border h-full">
        <div className="space-y-2">

          <img
            src={image}
            alt=""
            className="object-cover w-full mb-4 max-h-44  dark:bg-gray-500"
          />

          <div className="p-4">
            <h1>{status}</h1>
            <div className="flex justify-between">
              <h2 className="mb-1 text-2xl font-semibold">{estate_title}</h2>
              <h2 className="mb-1 text-2xl text-[#4338ca] font-semibold">
                ${price}
              </h2>
            </div>
            <div className="flex gap-3 mt-4">
              <div className="bg-white px-4 py-1 rounded-full text-sm text-[#4338ca]">
                {facilities[0]}
              </div>
              <div className="bg-white px-4 py-1 rounded-full text-sm text-[#4338ca]">
                {facilities[1]}
              </div>
              <div className="bg-white px-4 py-1 rounded-full text-sm text-[#4338ca]">
                {facilities[2]}
              </div>
            </div>
          </div>

         <hr  className="border-slate-300  my-4 border "/>
        <div className="flex justify-between items-center p-4">
          
      <div className='flex gap-3 items-center'>
        <IoLocationOutline />
      <h1 className="text-gray-500">{location}</h1>
      </div>

       <Link to={`/details/${id}`}> <button className="border bg-[#4338ca] text-white px-6 py-2 rounded-full">View</button></Link>
        </div>

        </div>
      </div>
    </div>
  );
};

export default CardOne;
