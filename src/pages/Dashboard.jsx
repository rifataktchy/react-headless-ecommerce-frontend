import { NavLink, Outlet } from "react-router-dom";
import Heading from "../components/Heading "
import Wishlist from "../components/Wishlist"
import FavouriteCards from "../components/FavouriteCards";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
    return (
        <>
        <div className="min-h-[200px] bg-purple-500 text-white pt-10 flex flex-col justify-start items-center">
        <Helmet>
        <title>dashboard - Gadget Heaven</title>
        <meta name="description" content="Discover the latest in tech accessories on Gadget Heaven!" />
      </Helmet>         
          <Heading title='Dashboard' subtitle='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!' />
        
          <div className="flex flex-row justify-center items-center gap-4">
          <NavLink
                 to={``}
                  className={({isActive}) => ` ${isActive ? 'text-purple-500 bg-white rounded-lg px-2 mt-4 py-1': 'border border-white rounded-lg px-2 mt-4 py-1'}`}
                  ><button>Card</button></NavLink>
        
                  <NavLink
                 to={`/dashboard/wishlist`}
                  className={({isActive}) => `${isActive ? 'text-purple-500 bg-white rounded-lg px-2 mt-4 py-1': 'border border-white rounded-lg px-2 mt-4 py-1'}`}
                  ><button>wishlist</button></NavLink>

          </div>
          </div> 
                  
            <div className="mt-8 w-full flex justify-center">
                <Outlet />
            </div>


              
        </>
    );
};

export default Dashboard;