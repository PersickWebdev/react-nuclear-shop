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
            payload: itemId
        }
    },

    increase: (itemId: number) => {
        return {
            type: CartTypes.increase,
            payload: itemId,
        }
    },
}