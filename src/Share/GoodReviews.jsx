const GoodReviews = () => {
  return (
    <div className="mt-28">
      <div>
        <div className="text-center  max-w-2xl mx-auto">
          <h1 className="font-bold text-4xl mb-6">Good Reviews by Customers</h1>
          <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores 
          </p>
        </div>
      </div>

      <div className="grid gri  md:grid-cols-2 lg:grid-cols-3 gap-6 my-14">
        <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md bg-white dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
          <div className="flex justify-between p-4">
            <div className="flex space-x-4">
              <div>
                <img
                  src="https://source.unsplash.com/100x100/?portrait"
                  alt=""
                  className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                />
              </div>
              <div>
                <h4 className="font-bold">Leroy Jenkins</h4>
                <span className="text-xs dark:text-gray-600">2 days ago</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 dark:text-yellow-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current"
              >
                <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
              </svg>
              <span className="text-xl font-bold">4.5</span>
            </div>
          </div>
          <div className="p-4 space-y-2 text-sm dark:text-gray-600">
            <p>
              Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu
              dictum lectus consequat vitae. Etiam ut dolor id justo fringilla
              finibus.
            </p>
            <p>
              Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu
              mauris cursus venenatis. Maecenas gravida urna vitae accumsan
              feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.
            </p>
          </div>
        </div>
        <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md bg-white dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
          <div className="flex justify-between p-4">
            <div className="flex space-x-4">
              <div>
                <img
                  src="https://resido-v2.smartdemowp.com/wp-content/uploads/2022/07/user-5.jpg"
                  alt=""
                  className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                />
              </div>
              <div>
                <h4 className="font-bold">Usan Gulwarm</h4>
                <span className="text-xs dark:text-gray-600">2 days ago</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 dark:text-yellow-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current"
              >
                <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
              </svg>
              <span className="text-xl font-bold">4.8</span>
            </div>
          </div>
          <div className="p-4 space-y-2 text-sm dark:text-gray-600">
            <p>
              The exceptional service at this resort made our stay
              unforgettable. From the elegant rooms to the top-notch dining
              options, every detail was carefully curated. The staffs
              friendliness and professionalism created a welcoming environment.
              A must-visit for those seeking a luxurious and relaxing escape.
            </p>
          </div>
        </div>
        <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md bg-white dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
          <div className="flex justify-between p-4">
            <div className="flex space-x-4">
              <div>
                <img
                  src="https://resido-v2.smartdemowp.com/wp-content/uploads/2022/07/user-6.jpg"
                  alt=""
                  className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                />
              </div>
              <div>
                <h4 className="font-bold">Sam J. Wasim</h4>
                <span className="text-xs dark:text-gray-600">7 days ago</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 dark:text-yellow-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current"
              >
                <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
              </svg>
              <span className="text-xl font-bold">4.9</span>
            </div>
          </div>
          <div className="p-4 space-y-2 text-sm dark:text-gray-600">
            <p>
              The hospitality at our resort exceeded expectations. The attentive
              staff provided personalized service, creating a warm and welcoming
              atmosphere. Luxurious accommodations, exquisite dining, and an
              array of recreational activities made for a truly exceptional
              stay. We highly recommend this resort for a memorable and relaxing
              getaway.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoodReviews;
