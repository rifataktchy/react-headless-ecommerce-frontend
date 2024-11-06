import { FaRegWindowClose } from "react-icons/fa";

const Fcard = ({product}) => {
    const {product_title, price, product_image} = product || {};
    return (
        <div className="flex justify-between border-gray-300 shadow-lg w-full">
            <div className="p-5 m-2 flex h-[150px] w-[1000px]">
            
            <img className="h-20" src={product_image} alt='img'/>
            <div className="flex flex-col">
            <h1>{product.product_title}</h1>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            </div>
            
            </div>
            
            <button><FaRegWindowClose /></button>
            
        </div>
    );
};

export default Fcard;