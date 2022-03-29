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

        case CartTypes.decrease:
            const newItemsDecreased = {
                ...state.products,
            }
            for (let array in newItemsDecreased) {
                if (Number(array) === action.payload) {
                    // @ts-ignore
                    if (newItemsDecreased[array].length > 1) {
                        // @ts-ignore
                        newItemsDecreased[array].pop();
                    }
                }
            }
            return {
                ...state,
                products: newItemsDecreased,
                totalItemsCount: getTotalItemsCount(newItemsDecreased),
                totalItemsPrice: getTotalItemsPrice(newItemsDecreased),
            }

        case CartTypes.remove:
            const newItemsRemoved = {
                ...state.products,
            }
            for (let array in newItemsRemoved) {
                if (Number(array) === action.payload) {
                    // @ts-ignore
                    newItemsRemoved[array].length = 0;
                }
            }
            return {
                ...state,
                totalItemsCount: getTotalItemsCount(newItemsRemoved),
                totalItemsPrice: getTotalItemsPrice(newItemsRemoved),
            }

        case CartTypes.clear:
            return {
                ...state,
                products: [],
                totalItemsCount: 0,
                totalItemsPrice: 0,
            }

        default:
            return state;
    }
}