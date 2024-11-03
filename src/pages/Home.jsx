import Banner from "../components/Banner";
import Heading from "../components/Heading ";


const Home = () => {
    return (
        <div className="relative min-h-[700px]">
            {/* heading */}
            <Heading title={'Upgrade Your Tech Accessorize with Gadget Heaven Accessories'} subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}/>
            {/* banner */}
            <Banner/>
            {/* category section and nested category */}
        </div>
    );
};

export default Home;