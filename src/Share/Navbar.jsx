import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch(() => {
        // An error happened.
      });
  };

  const navItem = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      {user && <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>}
    </>
  );
  return (
    <div className="bg-base-100 z-10">
      <div className="navbar h-20  max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box z-10 w-52"
            >
              {navItem}
            </ul>
          </div>
          <a className=" text-2xl font-one text-primary">Voyage Vista</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>
        <div className="navbar-end">
          {user && (
            <>
              {user?.photoURL ? (
                <Link to="/profile">
                  <img
                    className="w-12 h-12 rounded-full border-spacing-2  border border-r-cyan-700"
                    src={user.photoURL}
                    alt=""
                  />
                </Link>
              ) : (
                <img
                  className="w-12 h-12 rounded-full border-spacing-2  border border-r-cyan-700"
                  src="https://i.ibb.co/98GxgKS/3.jpg"
                  alt=""
                />
              )}
              <Link
                to="/login"
                onClick={handleLogOut}
                className="btn ml-2 btn-warning"
              >
                Sin Out
              </Link>
            </>
          )}

          {!user && (
            <Link to="/login" className="btn btn-primary">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
