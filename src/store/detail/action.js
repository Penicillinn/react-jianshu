import * as types from './action-types';
import {  getDetail } from '../../network/detail';
const action = {
    getData() {
        return async (dispatch) => {
            const { data } = await getDetail();
            dispatch(action.changeData(data.data))
        }
    },
    changeData(data) {
        return {
            type: types.CHANGE_DATA,
            data
        }
    }
}

export default action;