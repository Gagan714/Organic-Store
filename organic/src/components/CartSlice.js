import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      const quantityToAdd = action.payload.quantity;

      if (existingItem) {
        existingItem.quantity += quantityToAdd;
        existingItem.totalPrice += action.payload.price * quantityToAdd;
      } else {
        state.items.push({
          ...action.payload,
          quantity: quantityToAdd,
          totalPrice: action.payload.price * quantityToAdd,
        });
      }

      state.totalQuantity += quantityToAdd;
      state.totalPrice += action.payload.price * quantityToAdd;
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        state.totalQuantity -= state.items[index].quantity;
        state.totalPrice -= state.items[index].totalPrice;
        state.items.splice(index, 1);
      }
    },
    decreaseQuantity: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        existingItem.totalPrice -= existingItem.price;
        state.totalQuantity -= 1;
        state.totalPrice -= existingItem.price;
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, decreaseQuantity, clearCart } = CartSlice.actions;
export default CartSlice.reducer;
