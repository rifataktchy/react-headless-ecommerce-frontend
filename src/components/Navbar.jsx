import { Link, NavLink, useLocation } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { getAllFavourites, getAllWishlists } from '../Utils';

const Navbar = () => {
  const [products, setProducts] =useState([])
    useEffect(()=>{
      const favourites= getAllFavourites()
      setProducts(favourites)
    },[products])
  

    const [wishlists, setWishlists] =useState([])
    useEffect(()=>{
      const wishlists= getAllWishlists()
      setWishlists(wishlists)
    },[wishlists])

  const {pathname} = useLocation()
  const backgroundColor = (pathname === '/dashboard' || pathname === '/statistics' || pathname === '/contact' || pathname=== '/dashboard/favouritecard' || pathname=== '/dashboard/wishlist') ? 'bg-white text-black' : 'bg-purple-500';

    return (
        <div className={`${backgroundColor} navbar container mx-auto mt-4`}>
          <div className="navbar-start">
           <div className="dropdown">
             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <NavLink to='/' className={({isActive}) => `font-bold ${isActive ? 'font-bold text-purple-500 rounded-lg p-2': 'hover:font-xl'}`}>Home</NavLink>
      <NavLink to='/statistics' className={({isActive}) => `font-bold ${isActive ? 'font-bold text-purple-500 rounded-lg p-2': 'hover:font-xl'}`}>Statistics</NavLink>
      <NavLink to='/dashboard' className={({isActive}) => `font-bold ${isActive ? 'font-bold text-purple-500 rounded-lg p-2': 'hover:font-xl'}`}>Dashboard</NavLink>
      <NavLink to='/contact' className={({isActive}) => `font-bold ${isActive ? 'font-bold text-purple-500 rounded-lg p-2': 'hover:font-xl'}`}>Contact</NavLink>
      </ul>
    </div>
    <div className="text-black font-bold text-2xl">
    <Link to='/'>Gadget Heaven</Link>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex text-black font-bold text-lg">
    <ul className="menu menu-horizontal px-1 gap-8 flex justify-center items-center">
      <NavLink to='/' className={({isActive}) => `font-bold ${isActive ? 'font-bold rounded-lg p-2': 'hover:font-xl'}`}>Home</NavLink>
      <NavLink to='/statistics' className={({isActive}) => `font-bold ${isActive ? 'font-bold text-purple-500 rounded-lg p-2': 'hover:font-xl'}`}>Statistics</NavLink>
      <NavLink to='/dashboard' className={({isActive}) => `font-bold ${isActive ? 'font-bold text-purple-500 rounded-lg p-2': 'hover:font-xl'}`}>Dashboard</NavLink>
      <NavLink to='/contact' className={({isActive}) => `font-bold ${isActive ? 'font-bold text-purple-500 rounded-lg p-2': 'hover:font-xl'}`}>Contact</NavLink>
    </ul>
  </div>
  <div className="navbar-end flex flex-row gap-4 justify-end items-center">
    <NavLink to='/dashboard/favouritecard' className=""><IoCartOutline className="text-2xl m-2 bg-white rounded-full p-1"/><span className="absolute top-5 right-21 text-red-500 font-bold rounded-full p-1">{products.length}</span></NavLink>
  <NavLink to='/dashboard/wishlist' className=""><FaRegHeart className="text-2xl m-2 bg-white rounded-full p-1"/><span className="absolute top-5 right-21 text-red-500 font-bold rounded-full p-1">{wishlists.length}</span> </NavLink>
  </div>
</div>
    );
};

export default Navbar;