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
        case CartTypes.increase:
            const newItemsIncreased = {
                ...state.products,
            }
            for (let array in newItemsIncreased) {
                if (Number(array) === action.payload) {
                    // @ts-ignore
                    newItemsIncreased[array].push(newItemsIncreased[array][0]);
                }
            }

            return {
                ...state,
                products: newItemsIncreased,
                totalItemsCount: getTotalItemsCount(newItemsIncreased),
                totalItemsPrice: getTotalItemsPrice(newItemsIncreased),
            }
        default:
            return state;
    }
}