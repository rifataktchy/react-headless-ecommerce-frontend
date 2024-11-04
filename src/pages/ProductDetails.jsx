import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Heading from "../components/Heading ";

const ProductDetails = () => {
    const data = useLoaderData()
    const {product_id} = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
const singleData = data.find(product => product.product_id == product_id)
setProduct(singleData)
    },[data, product_id])

    return (
        
        <div>
           <div className="flex flex-col justify-start items-center min-h-40 bg-purple-500">
            <h1>Product Details</h1>
            <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div> 
           <div className="hero w-[700px] bg-white min-h-[350px] absolute top-40 left-80 rounded-lg flex">
              <div className="w-[350px]"><img className="h-80 rounded-lg" src={product.product_image} alt='img'/></div>
              <div className="w-[350px]">
                <div>
                    <h1>{product.product_title}</h1>
                    <p>Price: {product.price}</p>
                    <p className="text-green-700 border w-20 border-green-700 rounded-full pl-2">{product.availability ? 'In Stock' : 'Out of Stock'}</p>
                    <p>{product.description}</p> 
                    <p>{product.Specification}</p> 
                </div>
              </div>
           </div>
        </div>
    );
};

export default ProductDetails;