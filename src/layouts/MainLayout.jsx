import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Toaster } from 'react-hot-toast';



const MainLayout = () => {
    return (
        <div>
            
            <Toaster />
         
            {/* navbar */}
            <Navbar/>
            {/* dynamic section */}
            <div className="min-h-[calc(100vh-288px)] container mx-auto">
             <Outlet/>
            </div>
            {/* footer */}
            <Footer/>
           
        </div>
    );
};

export default MainLayout;