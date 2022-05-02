import axios from 'axios';
import { Endpoints } from '../api';
import { DataActions } from '../redux/actionCreators';

export const useRequests = () => {
    const getDataThunk = () => async (dispatch: any) => {
        const response = await axios.get(Endpoints.data);
        dispatch(DataActions.getAll(response.data));
        dispatch(DataActions.getRecommended(response.data));
    };

    return { getDataThunk };
};