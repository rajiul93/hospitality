import { CiLocationOn } from "react-icons/ci";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineForwardToInbox } from "react-icons/md";
const Contact = () => {
  return (
    <div className=" min-h-screen max-w-6xl  mx-auto bg-white">
          <h1 className="text-3xl my-14 font-bold text-center  max-w-48 mx-auto rounded-xl p-1 shadow-lg">Contact Us!</h1>

      <div className="hero-content flex-col lg:flex-row-reverse gap-6">
        <div className="text-center lg:text-left w-2/4 shrink-0  ">
          <div className="  ">
            <table className="table mt-4">
              {/* head */}

              <tbody>
                {/* row 1 */}
                <tr className="text-xl">
                  <td className="flex gap-3 items-center">
                    <MdOutlineForwardToInbox />
                    Email:
                  </td>
                  <td>rajiulrayhan@gamil.com</td>
                </tr>
                {/* row 2 */}
                <tr className="text-xl">
                  <td className="flex gap-3 items-center">
                    {" "}
                    <LuPhoneCall /> Phone
                  </td>
                  <td>+88 01986570093</td>
                </tr>
                <tr className="text-xl">
                  <td className="flex gap-3 items-center">
                    <CiLocationOn />
                    Location
                  </td>
                  <td>Bangladesh, Khulna, Bagerhat</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-warning">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
