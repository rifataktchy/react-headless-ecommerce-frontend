# 🛍️ Gadget Shop – React E-commerce Frontend

A modern, responsive e-commerce frontend application built with React. The project simulates a real-world online shop experience, including product browsing, cart functionality, and wishlist management.

🔗 Live Demo: https://gadget-heaven-rifhat.netlify.app/

---

## 🚀 Overview

This project demonstrates a scalable frontend architecture for e-commerce applications. It focuses on clean UI design, reusable components, and user-centric features.

The application is designed following a **headless commerce approach**, making it ready for integration with backend systems such as Shopware 6 Store API.

---

## ✨ Key Features

- 🛍️ Product browsing with detailed product pages  
- ❤️ Wishlist and favourites management (stored in localStorage)  
- 🛒 Cart functionality with purchase flow  
- 📊 Sort products by price  
- 🔄 Dynamic routing using React Router  
- 📱 Fully responsive design  

---

## 🧠 Technical Highlights

- Built with **React.js (Hooks + Component-based architecture)**
- Implemented **React Router** for navigation and route-based data loading  
- Managed state using `useState` and `useEffect`  
- Used **localStorage** for persistent user data (wishlist, cart)  
- Applied **conditional rendering** for dynamic UI behavior  
- Structured code for scalability and maintainability  

---

## 🧩 Architecture

This project follows a **frontend-focused, API-ready architecture**:

- UI components are modular and reusable  
- Data layer is structured for easy API integration  
- Routing is separated and scalable  

👉 The application is prepared to integrate with e-commerce backends such as **Shopware 6 Store API**.

---

## 🔌 Backend Integration (Planned)

Currently, the project uses mock/static data.

However, it is designed to support real backend integration, including:

- Product and category APIs  
- Dynamic pricing and filtering  
- Cart and checkout systems  

Example (planned integration):

```js
const BASE_URL = "http://localhost:8000/store-api";
