import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { addFavourite,  getAllFavourites, addWishlist, getAllWishlists} from "../Utils";
import StarRatings from 'react-star-ratings';

const ProductDetails = () => {
    const data = useLoaderData()
    const {product_id} = useParams()
    const [product, setProduct] = useState({})
    const [isFavourite, setIsFavourite] = useState(false)
    const [isWishlist, setIsWishlist] = useState(false)
    useEffect(() => {
const singleData = data.find(product => product.product_id == product_id)
setProduct(singleData)

const favourites = getAllFavourites()
const isExist = favourites.find(item => item.product_id== singleData.product_id)
if(isExist){
    setIsFavourite(true)}

    const wishlists = getAllWishlists()
    const isWishlistExist = wishlists.find(item => item.product_id== singleData.product_id)
    if(isWishlistExist){
        setIsWishlist(true)} 

},[data, product_id])


    const handleFavourite = (product) =>{
        addFavourite(product)
        setIsFavourite(true)
       
    }
    

    const handleWishlist = (product) =>{
        addWishlist(product)
        setIsWishlist(true)
    }
   

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
                    
                    {/* Rating display */}
            <div className="flex items-center gap-1">
              <StarRatings
                rating={product.rating} 
                starRatedColor="yellow" 
                changeRating={() => {}} 
                numberOfStars={5}
                starDimension="24px" 
                starSpacing="3px" 
                isSelectable={false} 
              />
           
                <span>{product.rating}</span>  
            </div>
                    <div className="flex flex-row justify-start items-center gap-4">
                    <button disabled={isFavourite} onClick={()=>handleFavourite(product)} className="flex flex-row justify-center items-center bg-purple-500 rounded-lg p-1">Add to Card<IoCartOutline className=""/></button>
                    
                    <button disabled={isWishlist} onClick={()=>handleWishlist(product)}  className="flex flex-row justify-center items-center bg-purple-500 rounded-lg p-1"><FaRegHeart className="text-2xl pl-2"/></button>
                    </div>
                </div>
              </div>
           </div>
           <div className="h-60"></div>
        </div>
    );
};

export default ProductDetails;