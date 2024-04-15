import { FaGithub } from "react-icons/fa6";
import { IoLogoGoogleplus } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io5";
import { Link } from "react-router-dom";

 

const Footer = () => {
    return (
      <footer className="footer text-black footer-center p-10 bg-[#dcfce7] ">
      <aside>
      <Link to='/'>
          <img className="max-h-14 rounded-lg" src="https://i.ibb.co/sRZcCdG/logo.jpg" alt="" />
          </Link>
        <p className="font-bold">
        Voyage Vista. <br/>Providing reliable tech since 1992
        </p> 
        <p>Copyright © 2024 - All right reserved</p>
      </aside> 
      <nav>
        <div className="grid grid-flow-col gap-4">
        <IoLogoGoogleplus className="text-2xl" />
        <IoLogoTwitter className="text-2xl" />

        <FaGithub className="text-2xl" />

 </div>
      </nav>
    </footer>
    );
};

export default Footer;