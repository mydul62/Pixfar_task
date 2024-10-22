import { configureStore, combineReducers } from '@reduxjs/toolkit'
import cartReducer from "../../features/cart/cartSlice"
import drowerReducer from '../../features/drower/drowerSlice'; 
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const cartPersistConfig = {
  key: "cart",
  storage,
};

const rootReducer = combineReducers({
  cart: persistReducer(cartPersistConfig, cartReducer),
  drower: drowerReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
