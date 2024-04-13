
import { Outlet } from 'react-router-dom';
import Footer from '../../../Share/Footer/Footer';
import Navbar from '../../../Share/Navbar';
const Root = () => {
    return (

        <div className='bg-[#e2e8f0] main-font'>

            <Navbar/>
        <div className='max-w-7xl px-2 mx-auto'>
           <div className='min-h-[calc(100vh-290px)]'>
           <Outlet/>
           </div>
        </div>
            <Footer/>
        </div>
    );
};

export default Root;