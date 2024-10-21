import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
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
      const existingItem = state.items.find(item => item.name === action.payload.name);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        const newItem = { ...action.payload, quantity: 1 };
        state.items.push(newItem);
      }

      // Check if price is a valid number before adding to totalPrice
      if (typeof action.payload.price === 'number' && !isNaN(action.payload.price)) {
        state.totalPrice += action.payload.price; // Update total price
      } else {
        console.error("Invalid product price:", action.payload.price);
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
