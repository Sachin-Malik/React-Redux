import { combineReducers } from "redux";

import cakeReducer from "./cake/cakeReducer";
import coffeeReducer from "./coffe/coffeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import userReducer from "./user/userReducer"

const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream: iceCreamReducer,
    coffe: coffeeReducer,
    user:userReducer
})

export default rootReducer;