import { FaGithub } from "react-icons/fa6";
import { IoLogoGoogleplus } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io5";

 

const Footer = () => {
    return (
      <footer className="max-w-6xl mx-auto footer p-10  text-neutral-content">
      <aside>
       <img width={100} src="https://i.ibb.co/sRZcCdG/logo.jpg" alt="" />
        <p>Voyage Vistas Ltd.<br/>Providing reliable tech since 1998</p>
      </aside> 
      <nav>
        <h6 className="footer-title">Social</h6> 
        <div className="grid grid-flow-col gap-4 text-4xl">
          <IoLogoGoogleplus/>
          <IoLogoTwitter/>
          <FaGithub/>

             </div>
      </nav>
    </footer>
    );
};

export default Footer;