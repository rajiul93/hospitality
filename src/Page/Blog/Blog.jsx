import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import BlogCard from "./BlogCard";

const Blog = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('/data2.json')
    .then(res=>res.json())
    .then(data => setData(data))
  }, [])
  
  return (
    <div className="bg-[#e0f2fe]">
      <Helmet>
        <title>VoyageVista | Blog</title>
      </Helmet>
      <section className="max-w-6xl mx-auto dark:bg-gray-100 dark:text-gray-800">
        <div className="p-6 mx-auto space-y-6 sm:space-y-12">
          <a
            rel="noopener noreferrer"
            href="#"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50"
            data-abc="true"
          >
            <img
              src="https://i.ibb.co/dLTD8qd/55.jpg"
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                Noster tincidunt reprimique ad pro
              </h3>
              <span className="text-xs dark:text-gray-600">
                February 19, 2021
              </span>
              <p>
                City Center Motel offers an affordable and convenient stay in
                the heart of the city, providing travelers with comfortable
                accommodations and easy access to local attractions. The motel's
                well-maintained rooms are equipped with essential amenities,
                ensuring a pleasant and relaxing stay. Whether you're in town
                for business or leisure, you'll appreciate the proximity to
                shopping centers, restaurants, and entertainment venues. The
                friendly staff at City Center Motel strives to deliver excellent
                service, assisting guests with local recommendations and any
                other needs they may have. On-site parking is available for
                added convenience
              </p>
            </div>
          </a>
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
       
            {
              data.map(item=><BlogCard item={item} key={item.id}/>)
            }
           
           
           
       
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600"
            >
              Load more posts...
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
