import { CartTypes } from '../actionTypes';

const initialState = {
    products: []
}

export const CartReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case CartTypes.set:
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        default:
            return state;
    }
}