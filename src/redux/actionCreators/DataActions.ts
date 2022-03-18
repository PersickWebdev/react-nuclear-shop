import { DataTypes } from '../actionTypes';

export const DataActions = {
    getAll: (data: any) => {
        return {
            type: DataTypes.getData,
            payload: data,
        }
    },
}