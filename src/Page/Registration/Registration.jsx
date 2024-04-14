import { getAuth, updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { IoLogoGoogleplus, IoLogoTwitter } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { app } from "../../Firebase/firebase.config";
import { AuthContext } from "../../Provider/AuthProvider";

import Swal from 'sweetalert2';
const Registration = () => {
  const auth = getAuth(app);
  const { googleLogin, user, createWithEmailPassword ,loginWithGitHub} = useContext(AuthContext);

  const navigate = useNavigate()
  const location = useLocation()
  const [showEye, setShowEye] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [errorMsz, setErrorMsz] = useState("");

  const registrationFrom = (data) => {
    setErrorMsz("");
    const { confirm_password, email, name, password,photo} = data;
    if (password.length < 6) {
      setErrorMsz("Password should be 6 charecter");
      return;
    }
    if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
      toast.warning("Must  be include  one Uppercase and one  Lowercase");
      return;
    }
    if (confirm_password !== password) {
      toast.warning("Password and confirm password should be same");
      return;
    }

    createWithEmailPassword(email, password)
      .then((result) => {
        const user = result.user;
        console.log("user", user);
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            toast.success("Login Successfully ");
      Swal.fire({
        title: 'success',
          text: 'Welcome Voyage Vista',
          icon: 'success',
          confirmButtonText: 'OK'
      })
      navigate(location?.state ? location.state : "/profile");
          })
          .catch((e) => console.log(e.message));
      })
      .catch((e) => console.log(e.message));
  };
  const googleRegistration = () => {
    googleLogin()
    .then(() => {
      toast.success("Login Successfully ");
      Swal.fire({
        title: 'success',
          text: 'Welcome Voyage Vista',
          icon: 'success',
          confirmButtonText: 'OK'
      })
      navigate(location?.state ? location.state : "/profile");
    })
    .catch(() => {
      toast.warn("something wrong github");
    });
  };
  const gitLogin =()=>{
    loginWithGitHub()
    .then(() => {
      toast.success("Login Successfully ");
      Swal.fire({
        title: 'success',
          text: 'Welcome Voyage Vista',
          icon: 'success',
          confirmButtonText: 'OK'
      })
      navigate(location?.state ? location.state : "/profile");
    })
    .catch(() => {
      toast.warn("something wrong github");
    });
  
  }
  return (
    <div className="w-full max-w-xl mx-auto p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800 font-one">
      <ToastContainer />
      <div className="card shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
        <h1 className="text-2xl font-bold mt-4  text-center">Registration</h1>

        <form
          className="card-body -mt-8"
          onSubmit={handleSubmit(registrationFrom)}
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Name"
              className="input input-bordered"
              required
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-2">
                Last name is required.
              </p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="email"
              className="input input-bordered"
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-2">Email is required.</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              {...register("photo")}
              type="text"
              placeholder="Photo Url"
              className="input input-bordered"
            />
            {/* no required */}
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", { required: true })}
              type={showEye ? "text" : "password"}
              placeholder="password"
              className="input input-bordered"
            />
            <div
              onClick={() => setShowEye(!showEye)}
              className="absolute top-12 right-4 cursor-pointer"
            >
              {showEye ? <FaEye /> : <FaEyeSlash />}
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-2">Password is required.</p>
            )}
            <p className="text-red-500 text-sm mt-2">{errorMsz}</p>
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type={showEye ? "text" : "password"}
              {...register("confirm_password", { required: true })}
              placeholder="Confirm Password"
              className="input input-bordered"
            />
            <div
              onClick={() => setShowEye(!showEye)}
              className="absolute top-12 right-4 cursor-pointer"
            >
              {showEye ? <FaEye /> : <FaEyeSlash />}
            </div>

            {errors.confirm_password && (
              <p className="text-red-500 text-sm mt-2">Password is required.</p>
            )}
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>

        <div className="flex items-center  space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
          <p className="px-3 text-sm dark:text-gray-600">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={googleRegistration}
            aria-label="Log in with Google"
            className="p-3 rounded-sm"
          >
            <IoLogoGoogleplus className="text-2xl" />
          </button>
          <button aria-label="Log in with Twitter" className="p-3 rounded-sm">
            <IoLogoTwitter className="text-2xl" />
          </button>
          <button onClick={gitLogin} aria-label="Log in with GitHub" className="p-3 rounded-sm">
            <FaGithub className="text-2xl" />
          </button>
        </div>

        <p className="text-xs text-center mb-4 sm:px-6 dark:text-gray-600">
          Dont have an account?
          <a
            rel="noopener noreferrer"
            href="#"
            className="underline dark:text-gray-800"
            data-abc="true"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Registration;
