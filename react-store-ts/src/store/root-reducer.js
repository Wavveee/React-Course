import { combineReducers } from "redux";

import { userReducer } from "./user/user.reduser";
import { categoriesReducer } from "./categories/category.reduser";
import { cartReducer } from "./cart/cart.reducer"

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});
