import { CartTypes } from '../actionTypes';
import { useUtils } from '../../utils';

const initialState = {
    products: [],
    totalItemsCount: 0,
    totalItemsPrice: 0,
}

export const CartReducer = (state = initialState, action: any) => {
    const { getTotalItemsCount, getTotalItemsPrice } = useUtils();
    switch (action.type) {
        case CartTypes.add:
            const newItems = {
                ...state.products,
                [action.payload.productId]: !state.products[action.payload.productId]
                    ? [action.payload]
                    : [...state.products[action.payload.productId], action.payload]
            };
            return {
                ...state,
                products: newItems,
                totalItemsCount: getTotalItemsCount(newItems),
                totalItemsPrice: getTotalItemsPrice(newItems),
            }
        default:
            return state;
    }
}