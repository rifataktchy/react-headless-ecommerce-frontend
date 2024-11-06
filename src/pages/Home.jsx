import { useLoaderData} from "react-router-dom";
import Banner from "../components/Banner";
import Heading from "../components/Heading ";
import Categories from "../components/Categories";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const Home = () => {
    const navigate =useNavigate () 

    const categories = useLoaderData()
    return (     
        <div className="relative min-h-[700px]">
            <Helmet>
        <title>Home - Gadget Heaven</title>
        <meta name="description" content="Discover the latest in tech accessories on Gadget Heaven!" />
      </Helmet>
            {/* heading */}
            <div className="min-h-[300px] bg-purple-500 text-white pt-10 flex flex-col justify-start items-center">
            <Heading 
          title={<>Upgrade Your Tech Accessorize with<br />Gadget Heaven Accessories</>} 
          subtitle={<>Explore the latest gadgets that will take your experience to the next level. From smart devices <br/> to the coolest accessories, we have it all!</>} 
        />
        <button onClick={()=> navigate('/dashboard')} className="bg-white text-purple-600 flex flex-col justify-start items-center font-bold px-4 py-2 rounded-lg mt-8">Shop Now</button>
        </div>
        <div className="h-80"></div>
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