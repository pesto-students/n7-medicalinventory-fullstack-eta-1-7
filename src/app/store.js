import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/login/loginSlice";
import shopReducer from "../features/shop/shopSlice";
import searchReducer from "../features/search/searchSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    shop: shopReducer,
    search: searchReducer,
  },
});
