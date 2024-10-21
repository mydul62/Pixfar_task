import { configureStore } from '@reduxjs/toolkit'
import productsApi from '../../features/Products/productsApi'
import cartReducer from "../../features/cart/cartSlice"
import drowerReducer from '../../features/drower/drowerSlice'; 

export const store =  configureStore({

  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    cart : cartReducer,
    drower:drowerReducer,
    
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(productsApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
