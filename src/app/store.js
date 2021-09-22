import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import loginReducer from '../features/login/loginSlice'
import shopReducer from '../features/shop/shopSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login:loginReducer,
    shop:shopReducer
  },
});
