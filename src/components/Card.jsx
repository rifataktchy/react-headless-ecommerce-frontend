import { Link } from "react-router-dom";

const Card = ({product}) => {
    const {product_title, price, product_image, product_id} = product || {};
    return (
        <div className="border border-gray-300 shadow-lg p-5 m-2">
            
            <img className="h-60 rounded-lg" src={product_image} alt='img'/>
            <p>Name:{product_title}</p>
            <h1>Price: {price}$</h1>
            <Link to={`/product/${product_id}`} className="bg-purple-500 rounded-lg p-2 mt-2 inline-block text-white">
  View Details
</Link>
        </div>
    );
};

export default Card;