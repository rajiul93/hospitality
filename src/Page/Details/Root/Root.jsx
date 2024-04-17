import { Outlet } from "react-router-dom";
import Footer from "../../../Share/Footer/Footer";
import Navbar from "../../../Share/Navbar";
const Root = () => {
  return (
    <div>
      <Navbar />

      <div className="min-h-[calc(100vh-290px)]">
        <Outlet />
      </div>
      <div className="bg-neutral">
        <Footer />
      </div>
    </div>
  );
};

export default Root;
