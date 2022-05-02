import { DataTypes } from '../actionTypes';
import { ICategory, IProduct } from '../../types';

const initialState = {
    data: [],
    filteredData: [],
    recommendedProducts: []
}

export const DataReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case DataTypes.getData:
            return {
                ...state,
                data: action.payload,
            }
        case DataTypes.getRecommended:
            const recommendedProducts: IProduct[] = [];
            state.data.forEach((category: ICategory) => {
                category.categoryProducts.forEach((product: IProduct) => {
                    if (product.recommended) {
                        recommendedProducts.push(product);
                    } else {
                        return;
                    }
                });
            });
            return {
                ...state,
                recommendedProducts: recommendedProducts
            }
        case DataTypes.filter:
            const filteredProducts: IProduct[] = [];
            state.data.forEach((category: ICategory) => {
                category.categoryProducts.forEach((product: IProduct) => {
                    if (product.productName.toLowerCase().includes(action.payload.toLowerCase())) {
                        filteredProducts.push(product);
                    } else {
                        return;
                    }
                });
            });
            return {
                ...state,
                filteredData: filteredProducts
            }
        case DataTypes.clearFiltered:
            return {
                ...state,
                filteredData: []
            }
        default:
            return state;
    }
}