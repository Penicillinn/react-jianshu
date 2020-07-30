import * as types from './action-types';
import { getHomeList,getLoadMore } from '../../network/home';
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
    },
    addLoadMore(data) {
        return {
            type: types.ADD_LOADMORE,
            data
        }
    },
    loadMore() {
        return async (dispatch) => {
            const { data } = await getLoadMore();
            dispatch(action.addLoadMore(data.data))
        }
    },
    changeBacktop(data) {
        return {
            type: types.TOGGLE_BACKTOP,
            data
        }
    }
}

export default action;