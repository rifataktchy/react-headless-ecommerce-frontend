import toast from "react-hot-toast";

// get all products from local storage
const getAllFavourites = () => {
    const all = localStorage.getItem('favourites')
    if(all){
        const favourites = JSON.parse(all);
        return favourites
        
    }else {
        return[]
    }
    
}




const getAllWishlists = () => {
    const all = localStorage.getItem('wishlists')
    if(all){
        const wishlists = JSON.parse(all);
        return wishlists
    }else {
        return[]
    }
}



// add product to local storage
const addFavourite = (product, setFavouritesCount) => {
    
    const favourites = getAllFavourites()

    
    const isExist = favourites.find(item => item.product_id== product.product_id)
    
    if (isExist) return toast.error('Product already exists!');
    favourites.push(product)
    localStorage.setItem('favourites', JSON.stringify(favourites))
    // // Update the favourites count in context
    // setFavouritesCount(favourites.length);

    toast.success('Successfully added to card!');
}

const addWishlist = (product, setWishlistsCount) => {
    const wishlists = getAllWishlists()


    const isWishlistExist = wishlists.find(item => item.product_id== product.product_id)
    console.log(isWishlistExist)
    if(isWishlistExist) return toast.error('Product already exist!')
    wishlists.push(product)
    localStorage.setItem('wishlists', JSON.stringify(wishlists))
    // // Update the wishlists count in context
    // setWishlistsCount(wishlists.length);
    
    toast.success('Successfully added to wishlist!');
}

// remove product from local storage
const clearFavourites = () => {
    localStorage.setItem('favourites', JSON.stringify([]));
};

const clearWishlists = () => {
    localStorage.setItem('wishlists', JSON.stringify([]));
};

export {addFavourite, getAllFavourites, addWishlist, getAllWishlists, clearFavourites, clearWishlists}