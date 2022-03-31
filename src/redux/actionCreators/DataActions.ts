import { DataTypes } from '../actionTypes';

export const DataActions = {
    getAll: (data: any) => {
        return {
            type: DataTypes.getData,
            payload: data,
        }
    },
    filter: (filterValue: string) => {
        return {
            type: DataTypes.filter,
            payload: filterValue,
        }
    },
    clearFiltered: () => {
        return {
            type: DataTypes.clearFiltered,
        }
    }
}