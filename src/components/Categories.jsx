import { NavLink, Outlet } from "react-router-dom";


const Categories = ({categories}) => {
    return (
        <>
        <h1 className="flex justify-center items-center font-bold text-black text-2xl pb-6">Explore Cutting-Edge Gadgets</h1>
        <div className="md:flex">
           
              <div className="flex flex-col sm:w-11/12 md:w-3/12 font-bold">
              
              <NavLink
                 to={`/`}
                  className={({isActive}) => `flex ${isActive ? 'bg-purple-500 py-2 rounded-lg mr-10 pl-4 text-white': 'px-2 py-4'}`}
                  ><button>All Products</button></NavLink>

                {categories.map(category => (
                <NavLink
                 to={`/category/${category.category}`}
                  className={({isActive}) => `flex ${isActive ? 'bg-purple-500 py-2 rounded-lg mr-10 pl-4 text-white': 'px-2 py-4'}`}
                  >{category.category}</NavLink>
                
               ))
               }
              </div>
            
              <div className="sm:w-11/12 md:w-9/12">
                <Outlet />
              </div>
        </div>
        </>
    );
};

export default Categories;