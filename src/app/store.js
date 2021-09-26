import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/login/loginSlice'
import shopReducer from '../features/shop/shopSlice'
export const store = configureStore({
  reducer: {

    login:loginReducer,
    shop:shopReducer
  },
});
