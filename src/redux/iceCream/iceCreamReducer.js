import { BUY_ICECREAM } from "./iceCreamType"

const intialState = {
    numberOfIceCream:20
}

const iceCreamReducer = (state=intialState,action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numberOfIceCream: state.numberOfIceCream - 1,
            }
        default:
            return state
    }
}

export default iceCreamReducer;