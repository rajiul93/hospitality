import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from "../../Provider/AuthProvider";
const Profile = () => {
    // const auth = getAuth(app);
  const { user, updateName,updatePhoto, setUser, loader } = useContext(AuthContext);
  const [show, setShow] = useState(false);

  if (loader) {
    return <div className="h-screen flex justify-center items-center"><span className="loading loading-spinner w-14 text-warning"></span></div>
  }

  const updateUserName = async (e) => {
    e.preventDefault();
    const name =  e.target.name.value;
    if (!name.length) {
        toast.warning('You should enter your new name')
      return
    }
    try {
        await updateName(name)
        setUser({
            ...user,
            displayName:name,
        });
        e.target.name.value =""
    } catch (error) {
        console.error('Failed to update profile:', error);
    }
  };

  const updateUserPhoto = async (e) => {
    e.preventDefault();
    const image =  e.target.image.value;
    if (!image.length) {
        toast.warning('You should enter your new image url')
      return
    }
    try {
        await updatePhoto(image)
        setUser({
            ...user,
            photoURL:image,

        });
        e.target.image.value =""
    } catch (error) {
        console.error('Failed to update profile:', error);
    }
  };



  
  return (

<div className="bg-[#e0f2fe] py-14">
<Helmet>
    <title>
    VoyageVista | Profile
    </title>
</Helmet>
<ToastContainer />

    <div className="m-6 max-w-6xl mx-auto grid md:gap-8 grid-cols-1 md:grid-cols-6 content-center">
      <div className="col-span-2   w-full">
        <div className="flex flex-col justify-center  p-4 shadow-md rounded-xl bg-white sm:px-12 dark:bg-gray-50 dark:text-gray-800">
          <img
            src={user.photoURL}
            alt=""
            className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
          />
          <div className="space-y-4   divide-y dark:divide-gray-300">
            <div className="my-2 space-y-3">
              <h2 className="text-xl font-semibold text-center  sm:text-2xl text-warning">
                {user.displayName}
              </h2>
              <p className="px-5 text-xs sm:text-base dark:text-gray-600">
                Full-stack developer
              </p>
              <p className="px-5 text-left text-xs sm:text-base dark:text-gray-600">
               Email: <br /> {user.email}
              </p>
              <div className="px-5 text-left text-xs sm:text-base dark:text-gray-600 ">
                PhotoURL: <p className="overflow-x-auto overflow-y-auto">{user.photoURL}</p>
              </div>
              {show ? (
                <p
                  onClick={() => setShow(!show)}
                  className=" cursor-pointer px-5 text-xs sm:text-base dark:text-gray-600"
                >
                  {user.uid}
                </p>
              ) : (
                <p
                  onClick={() => setShow(!show)}
                  className="px-5 btn cursor-pointer text-xs sm:text-base dark:text-gray-600"
                >
                  Show Id
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-4 mt-14 md:mt-0">
        <div>
          <h1 data-aos="zoom-in-down" className="text-2xl font-bold font-one mb-8 text-warning">
            Welcome
          </h1>
          <p className="">
            Welcome to our resort website! We’re thrilled to have you here. As
            you step into our digital world, prepare to be immersed in a realm
            of relaxation, luxury, and unforgettable experiences. Whether you are
            planning a romantic getaway, a family vacation, or a solo adventure,
            our resort offers something special for everyone. Browse through our
            breathtaking accommodations, world-class amenities, and exciting
            activities tailored to all types of travelers. Stay up to date with
            exclusive offers and events designed to make your stay even more
            memorable. Were here to make your dream vacation a reality. Explore
            our site and let your journey begin!
          </p>
        </div>

        <div className="bg-white rounded p-4 mt-14">
          <h1 className="text-2xl mt-8">Update Profile</h1>
          <form   onSubmit={updateUserName} className="flex gap-3 mt-4">
            <label className="input input-bordered flex items-center gap-2">
              <input
                name="name"
                type="text"
                className="grow"
                placeholder="Name"
              />
            </label>
            <button type="submit" className="btn text-primary hover:text-white hover:bg-primary">
              Update Name
            </button>
          </form>
          <form   onSubmit={updateUserPhoto} className="flex gap-3 mt-4">
            <label className="input input-bordered flex items-center gap-2">
              <input name="image" type="text" className="grow" placeholder="photoURL" />
            </label>
            <button type="submit" className="btn text-primary hover:text-white hover:bg-primary ">Update Image</button>
          </form>
        </div>
      </div>
    </div>
</div>

  );
};

export default Profile;
