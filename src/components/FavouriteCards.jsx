import { useEffect, useState } from 'react';
import { getAllFavourites } from '../Utils';
import Fcard from './Fcard';

const FavouriteCards = () => {
    const [products, setProducts] = useState([]);
    const [sortedProducts, setSortedProducts] = useState([]);
    
   
    useEffect(() => {
        const favourites = getAllFavourites();
        setProducts(favourites); 
        setSortedProducts(favourites); 
    }, []);
    
  
    const sortByPriceDesc = () => {
        const sorted = [...products].sort((a, b) => {
            return b.price - a.price; 
        });
        setSortedProducts(sorted); 
    };

    
    const totalCost = sortedProducts.reduce((accumulator, product) => {
        return accumulator + (product.price || 0); 
    }, 0);

    return (
        <div>
            <div className='flex flex-row justify-between'>
                <div className='font-bold text-xl'>Favourite Cards</div>
                <div className='flex gap-2'>
                    <div className='font-bold'>Total Cost: ${totalCost.toFixed(2)}</div>
                    
                    <button onClick={sortByPriceDesc} className='border border-purple-500 rounded-lg px-2'>
                        Sort By Price
                    </button>
                    <button className='border border-purple-500 rounded-lg px-2'>
                        Purchase
                    </button>
                </div>
            </div>

            
            <div>
                {sortedProducts.length > 0 ? (
                    sortedProducts.map(product => (
                        <Fcard key={product.product_id} product={product} />
                    ))
                ) : (
                    <p>No products available</p>
                )}
            </div>
        </div>
    );
};

export default FavouriteCards;
