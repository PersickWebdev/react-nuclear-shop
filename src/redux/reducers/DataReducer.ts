import { DataTypes } from '../actionTypes';

const initialState = {
    data: []
}

export const DataReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case DataTypes.getData:
            return {
                ...state,
                data: action.payload,
            }
        default:
            return state;
    }
}