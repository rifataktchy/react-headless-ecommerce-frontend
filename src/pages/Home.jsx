import { useLoaderData, useNavigate } from "react-router-dom";
import Banner from "../components/Banner";
import Heading from "../components/Heading ";
import Categories from "../components/Categories";



const Home = () => {
    

    const categories = useLoaderData()
    return (
        <div className="relative min-h-[700px]">
            {/* heading */}
            <Heading title={ <>
          Upgrade Your Tech Accessorize with<br />
           Gadget Heaven Accessories
        </>} subtitle={<>Explore the latest gadgets that will take your experience to the next level. From 
        smart devices <br/> to the coolest accessories, we have it all!</>}/>
    
            {/* banner */}
            <Banner/>
            {/* category section and nested category */}
            <div className="w-11/12 mx-auto">
                <div id="section"><Categories categories={categories}/></div>
                <div></div>
            </div>
        </div>
    );
};

export default Home;