import { useNavigate } from "react-router-dom";


const Heading  = ({title, subtitle}) => {
  const navigate =useNavigate ()
    return (
        <>
        <div className="flex flex-col justify-start items-center min-h-[400px] bg-purple-500 text-white pt-10">
          <h1 className="flex flex-row  justify-center items-center text-4xl">{title}</h1>  
          <p className=" flex flex-row  justify-center items-center text-sm">{subtitle}</p> 
          <button onClick={()=> navigate('/')} className="bg-white text-purple-600 font-bold px-4 py-2 rounded-lg mt-8">Shop Now</button>
        </div>
        <div className="min-h-80"></div>
        </>
    );
};

export default Heading ;