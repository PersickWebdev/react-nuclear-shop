import { CartTypes } from '../actionTypes';
import { IProduct } from '../../types';

export const CartActions = {
    set: (product: IProduct) => {
        return {
            type: CartTypes.add,
            payload: product,
        }
    },

    decrease: (itemId: number) => {
        return {
            type: CartTypes.decrease,
            payload: itemId,
        }
    },

    increase: (itemId: number) => {
        return {
            type: CartTypes.increase,
            payload: itemId,
        }
    },

    remove: (itemId: number) => {
        return {
            type: CartTypes.remove,
            payload: itemId,
        }
    },

    clear: () => {
        return {
            type: CartTypes.clear,
        }
    },
}