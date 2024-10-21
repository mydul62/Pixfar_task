import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: string; 
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalPrice: number;
}

const initialCartState: CartState = {
  items: [],
  totalPrice: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        const newItem = { ...action.payload, quantity: 1 };
        state.items.push(newItem);
      }
      
      if (typeof action.payload.price === 'number' && !isNaN(action.payload.price)) {
        state.totalPrice += action.payload.price; 
      } else {
        console.error("Invalid product price:", action.payload.price);
      }
    },
    removeCart: (state, action: PayloadAction<{ id: string }>) => {
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id); 
      
      if (existingItemIndex >= 0) {
        const itemToRemove = state.items[existingItemIndex];
        state.totalPrice -= itemToRemove.price * itemToRemove.quantity;
        state.items.splice(existingItemIndex, 1);
      }
    },
  },
});

export const { addToCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
