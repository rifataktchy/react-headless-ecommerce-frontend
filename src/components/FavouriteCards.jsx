import { useEffect, useState } from 'react';
import { getAllFavourites, clearFavourites } from '../Utils';
import Fcard from './Fcard';
import { useNavigate } from 'react-router-dom';

const FavouriteCards = () => {
    const [products, setProducts] = useState([]);
    const [sortedProducts, setSortedProducts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch favourites from local storage on component mount or after clearing
        const favourites = getAllFavourites();
        setProducts(favourites);
        setSortedProducts(favourites);
    }, [isModalOpen]); // Trigger refresh after purchase (when modal closes)

    const sortByPriceDesc = () => {
        const sorted = [...products].sort((a, b) => b.price - a.price);
        setSortedProducts(sorted);
    };

    const totalCost = sortedProducts.reduce((accumulator, product) => {
        return accumulator + (product.price || 0);
    }, 0);

    const handlePurchase = () => {
        setIsModalOpen(true);
        clearFavourites();
        setProducts([]); 
        setSortedProducts([]); 
    };

    const closeModal = () => {
        setIsModalOpen(false);
        navigate('/'); 
    };

    return (
        <div className='w-11/12'>
            <div className='flex flex-row justify-between w-full'>
                <div className='font-bold text-xl'>Cards</div>
                <div className='flex gap-2'>
                    <div className='font-bold'>Total Cost: ${totalCost.toFixed(2)}</div>

                    <button onClick={sortByPriceDesc} className='border border-purple-500 rounded-lg px-2'>
                        Sort By Price
                    </button>
                    <button
                        onClick={handlePurchase}
                        className='border border-purple-500 rounded-lg px-2'
                        disabled={totalCost === 0}
                    >
                        Purchase
                    </button>
                </div>
            </div>

            <div>
                {sortedProducts.length > 0 ? (
                    sortedProducts.map((product) => (
                        <Fcard key={product.product_id} product={product} />
                    ))
                ) : (
                    <p className='pt-10'>No products available</p>
                )}
            </div>

            {isModalOpen && (
                <div className="modal modal-open">
                    <div className="modal-box">
                        <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
                        <p>Your purchase was successful.</p>
                        <div className="modal-action">
                            <button onClick={closeModal} className="btn btn-primary">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FavouriteCards;
