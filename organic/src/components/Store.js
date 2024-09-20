import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; // Ensure this path is correct and matches your file name

const Store = configureStore({
  reducer: {
    cart: cartReducer, // Add cart slice to the store
  },
});

export default Store; // Ensure you use default export
