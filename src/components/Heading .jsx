

const Heading  = ({title, subtitle}) => {
    return (
        <>
        <div className="flex flex-col justify-center items-center min-h-[400px] bg-purple-500">
          <h1>{title}</h1>  
          <p>{subtitle}</p> 
        </div>
        <div className="min-h-40"></div>
        </>
    );
};

export default Heading ;