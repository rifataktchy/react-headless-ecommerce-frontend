import React, { useEffect, useState } from 'react';
import { getAllFavourites } from '../Utils';
import Fcard from './Fcard';

const FavouriteCards = () => {
    const [products, setProducts] =useState([])
    useEffect(()=>{
      const favourites= getAllFavourites()
      setProducts(favourites)
    },[])
    console.log(products.length)
    return (
        <div>
            <div>

            </div>
            <div className="">
         {products.map(product => (
            <Fcard product={product}/>
         ))} 
         
        
        </div>
        </div>
    );
};

export default FavouriteCards;