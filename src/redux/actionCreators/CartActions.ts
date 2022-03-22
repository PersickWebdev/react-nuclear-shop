import { CartTypes } from '../actionTypes';
import { IProduct } from '../../types';

export const CartActions = {
    set: (product: IProduct) => {
        return {
            type: CartTypes.add,
            payload: product,
        }
    }
}