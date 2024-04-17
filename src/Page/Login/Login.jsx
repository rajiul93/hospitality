import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaGithub, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { IoLogoGoogleplus, IoLogoTwitter } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Swal from 'sweetalert2';
import { AuthContext } from "../../Provider/AuthProvider";
const Login = () => {
  const { loginWithEmail,googleLogin ,twitterLogin,loginWithGitHub} = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation()
  const [shadow, setShadow] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    const { email, password } = data;
    loginWithEmail(email, password)
      .then(() => {
        Swal.fire({
          title: 'success',
          text: 'Welcome Voyage Vista',
          icon: 'success',
          confirmButtonText: 'OK'
        })
      navigate(location?.state ? location.state : "/profile");

      })
      .catch(() => {
        toast.warn("You have wrong password");
      });
  };

  const handleGoogleLogin =()=>{ 
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
      // toast.warn("You have wrong password");
    });
  } 

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

const tLogin =()=>{
  twitterLogin()
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
        <h1 className="text-2xl font-bold mt-4  text-center">Login</h1>

        <form onSubmit={handleSubmit(handleLogin)} className="card-body -mt-8">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
            {errors.email && <p>Last name is required.</p>}
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", { required: true })}
              type={shadow?"text":"password"}
              placeholder="password"
              className="input input-bordered"
              required
            />
            {!shadow? <FaRegEyeSlash 
            onClick={()=>setShadow(!shadow)}
            className="absolute top-14 right-8 cursor-pointer" />:
            <FaRegEye 
            onClick={()=>setShadow(!shadow)}
            className="absolute top-14 right-8 cursor-pointer"/>}
            {errors.password && <p>Please enter number for age.</p>}
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
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
          <button onClick={handleGoogleLogin} aria-label="Log in with Google" className="p-3 rounded-sm">
            <IoLogoGoogleplus className="text-2xl" />
          </button>
          <button onClick={tLogin} aria-label="Log in with Twitter" className="p-3 rounded-sm">
            <IoLogoTwitter className="text-2xl" />
          </button>
          <button onClick={gitLogin} aria-label="Log in with GitHub" className="p-3 rounded-sm">
            <FaGithub className="text-2xl" />
          </button>
        </div>
        <p className="text-xs text-center mb-4 sm:px-6 dark:text-gray-600">
          Dont have an account?
          <Link
            rel="noopener noreferrer"
            to="/registration"
            className="underline dark:text-gray-800"
            data-abc="true"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
