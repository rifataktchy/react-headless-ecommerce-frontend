# React E-Commerce Website

This is a React-based e-commerce website that allows users to browse and purchase gadgets, manage their favourites product and wishlists, and view detailed product information.

## Live Website Link

You can view the live version of the website by clicking the link below:

https://gadget-heaven-rifhat.netlify.app/

## Requirement Document Link

The requirement document outlining the full features and technical specifications of the project can be accessed from the link below:

https://github.com/ProgrammingHero1/B10-A8-gadget-heaven/blob/main/Batch-10_Assignment-08-.pdf 

## React Fundamental Concepts Used

In this project, the following React fundamentals have been used:

1. React Router: For handling navigation between different pages (e.g., Product Details, Wishlist, Dashboard).
2. State Management (useState): Used to manage component state (e.g., storing product details, wishlist items).
3. useEffect Hook: Used to fetch data (like product information) when components mount and to trigger re-renders.
4. Conditional Rendering: Displaying content based on specific conditions (e.g., showing "In Stock" or "Out of Stock" based on product availability).
6. Event Handling: Handling user interactions, such as clicking buttons to add products to the wishlist or favourites.

## Data Handling and Management

For data handling and management, the following methods have been used:

1. Local Storage:- Used to persist data like user preferences (wishlist, favourites) across page reloads. For example, when a user adds a product to their wishlist, it's stored in the local storage then I used it different places of code.

2. Data Loading with React Router Loaders:- I have used data loaders in React Router to fetch product details, categories, etc., directly when the route is accessed. This improves data handling by simplifying API calls and making data readily available to components on page load.

## 5 Key Features of the Website

1. Product Browsing and Details
   - Users can browse different products and view detailed information about each one, including images, prices, availability, and specifications.
   
2.Favourites and Wishlist
   - Users can add products to their favourites or wishlist. The products are stored locally, and the user can view their saved products at any time.
   
3. Sort Products by Price
   - Users can sort products by price from high to low, making it easier to compare and select items based on their budget.

4. Add Products to Cart (Optional)
   - Users can add products to the cart for purchase, and the cart persists across pages.

5. Purchase
   - Users can purchase products and a modal will come to show that purchase is done
