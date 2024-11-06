import React, { useEffect, useState } from 'react';
import { getAllWishlists } from '../Utils';
import Wcard from './Wcard';

const Wishlist = () => {
    const [products, setProducts] =useState([])
    useEffect(()=>{
      const wishlists= getAllWishlists()
      setProducts(wishlists)
    },[])
  
    return (
        <div className="w-11/12">
            <div>

            </div>
            <div className="">
         {products.map(product => (
            <Wcard product={product}/>
         ))} 
         
        
        </div>
        </div>
    );
};

export default Wishlist;