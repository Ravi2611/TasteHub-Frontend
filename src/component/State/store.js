import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./Authentication/Reducer";
import { thunk } from "redux-thunk";
import restaurantReducer from "./Restaurant/Reducer";
import menuItemReducer from "./Menu/Reducer";
import cartReducer from "./Cart/Reducer";
import { orderReducer } from "./Order/Reducer";
import restaurantsOrderReducer from "./Restaurant Order/Reducer";
import { ingredientReducer } from "./Ingredients/Reducer";


const routeReducer = combineReducers ({
    auth: authReducer,
    restaurant: restaurantReducer,
    menu: menuItemReducer,
    cart:cartReducer,
    order: orderReducer,
    // admin
    restaurantsOrder:restaurantsOrderReducer,
    ingredients:ingredientReducer,
});

export const store = legacy_createStore(routeReducer, applyMiddleware(thunk));