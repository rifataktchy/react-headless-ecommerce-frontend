import { FaRegWindowClose } from "react-icons/fa";


const Wcard = ({product}) => {
    const {product_title, price, product_image} = product || {};
    return (
        <div className="flex justify-between border-gray-300 shadow-lg w-full">
            <div className="p-5 m-2 flex h-[150px] w-[1000px]">
            
            <img className="h-20 rounded-lg" src={product_image} alt='img'/>
            <div className="flex flex-col">
            <p>Name:{product_title}</p>
            <h1>Price: {price}$</h1>
            </div>
        </div>
        <button><FaRegWindowClose /></button>
        </div>
    );
};

export default Wcard;