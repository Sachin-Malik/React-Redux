import { combineReducers } from "redux";

import cakeReducer from "./cake/cakeReducer";
import coffeeReducer from "./coffe/coffeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";

const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream: iceCreamReducer,
    coffe:coffeeReducer
})

export default rootReducer;