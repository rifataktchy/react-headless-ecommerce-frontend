const Heading  = ({title, subtitle}) => {
  
    return (
        <>
        <div className="flex flex-col justify-start items-center">
          <h1 className="flex flex-row  justify-center items-center text-4xl">{title}</h1>  
          <p className=" flex flex-row  justify-center items-center text-sm">{subtitle}</p> 
        </div>
        </>
    );
};

export default Heading ;