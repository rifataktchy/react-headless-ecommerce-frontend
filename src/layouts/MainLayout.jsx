import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <div>
            {/* navbar */}
            <Navbar/>
            {/* dynamic section */}
            {/* min-h-[calc(100vh-288px)] */}
            <div className="min-h-[calc(100vh-288px)] container mx-auto">
             <Outlet/>
            </div>
            {/* footer */}
            <Footer/>
        </div>
    );
};

export default MainLayout;