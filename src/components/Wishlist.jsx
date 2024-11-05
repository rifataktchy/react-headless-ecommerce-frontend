import React, { useEffect, useState } from 'react';
import { getAllWishlists } from '../Utils';
import Wcard from './Wcard';

const Wishlist = () => {
    const [products, setProducts] =useState([])
    useEffect(()=>{
      const wishlists= getAllWishlists()
      setProducts(wishlists)
    },[])
    console.log(products.length)
    return (
        <div>
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