import * as types from './action-types';
import { getHomeList } from '../../network/home';
const action = {
    getList() {
        return async (dispatch) => {
            const { data } = await getHomeList();
            dispatch(action.initialData(data.data))
        }
    },
    initialData(data) {
        return {
            type: types.GET_LIST,
            data
        }
    }
}

export default action;