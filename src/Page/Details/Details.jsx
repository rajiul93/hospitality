import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { CiCalendar } from "react-icons/ci";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from 'sweetalert2';
import { AuthContext } from "../../Provider/AuthProvider";

const Details = () => {

  const {loader} = useContext(AuthContext);
  
  const { id } = useParams();
  const data = useLoaderData();
 
 
  

  const singleData = data.find((e) => +id == e.id); 
  const {
    estate_title,
    category,
    description,
    price,
    status,
    area,
    location,
    facilities,
    image,
    segment_name,
  } = singleData;


const confirmForm =(e)=>{
  e.preventDefault()
  const name = e.target.name.value;
  const date =e.target.date.value
  Swal.fire({
    title: `<strong>Hi <u>${name}</u></strong>`,
    
    html: `
    <h1> conformation date: ${date}</h1>
      Our representative team will  <b>Contact</b>,
      with you
    `,
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText: `
      <i class="fa fa-thumbs-up"></i> Great!
    `,
    confirmButtonAriaLabel: "Thumbs up, great!",
  
  });
}

  return (
    <div className="bg-[#e0f2fe]">
      <Helmet>
        <title>VoyageVista | Details</title>
      </Helmet>
      {
        loader? <div className="h-screen flex justify-center items-center"><span className="loading loading-spinner w-14 text-warning"></span></div>
        :
        <div className="py-14 max-w-6xl mx-auto  ">
        <img
          className="max-h-[400px] w-full object-cover rounded-2xl "
          src={image}
          alt=""
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
          <div className="lg:col-span-3">
            <div className="  flex flex-col  mt-14   overflow-hidden rounded-lg shadow-md bg-white dark:bg-gray-50 dark:text-gray-800 border">
              <div className="space-y-2">
                <div className="p-4">
                  <h1 className="text-red-600">{status}</h1>
                  <div className="flex justify-between">
                    <h2 className="mb-1 text-2xl font-semibold">
                      {estate_title}
                    </h2>
                    <h2 className="mb-1 text-2xl text-[#4338ca] font-semibold">
                      ${price}
                    </h2>
                  </div>
                  <h1 className="text-gray-500">
                    {/* <CiLocationOn className="inline mr-3" /> */}
                    {location}
                  </h1>
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

                <hr className="border-slate-300  my-4 border " />
                <div className="flex justify-between items-center p-4">
                  <h1 className="text-gray-500">{category}</h1>
                  <h1 className="text-gray-500">{area}</h1>
                </div>
              </div>
            </div>
            <div className="mt-14">
              <h1 className="text-2xl font-bold">
                Description{" "}
                <span className="text-red-500">({segment_name})</span>
              </h1>
              <h1>{description}</h1>
            </div>
          </div>
          <div className="lg:col-span-2 rounded-2xl p-2 md:p-6 mt-14 bg-white shadow-2xl ">
            <h1 className="text-2xl font-semibold mb-4">Book Now{}</h1>

            <form onSubmit={confirmForm} className="space-y-3">
              <label className="input input-bordered flex items-center gap-2">
                <input name="name" type="text" className="grow" required placeholder="Full Name" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
              <label className="input input-bordered flex items-center gap-2">
              <CiCalendar />
                <input name="date" type="date" className="grow" required  />
              </label>
              <textarea
              name="description"
                className="textarea textarea-bordered w-full"
                placeholder="Bio"
              ></textarea>
              <input
                type="submit"
                value="Confirmed "
                className="btn btn-warning btn-primary"
              />
            </form>
            
          </div>
        </div>

        <hr className="border-slate-300  my-14 border " />

      
      </div>
      }
    </div>
  );
};

export default Details;
