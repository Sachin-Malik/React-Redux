import { BUY_COFFEE } from './coffeType'

const intialState = {
    numberOfCoffee:15
}

const coffeeReducer = (state=intialState,action) => {
    switch (action.type) {
        case BUY_COFFEE:
            return {
                ...state,
                numberOfCoffee: state.numberOfCoffee - 1
            }
        default:
            return state;
    }
}

export default coffeeReducer;