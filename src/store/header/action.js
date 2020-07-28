import * as types from './action-types';
import { getHeaderList } from '../../network/header';
const header = {
    changeStatus(status) {
        return {
            type: types.CHANGE_INPUT_STATUS,
            payload: status
        }
    },
    changeList(data) {
        return {
            type: types.CHANGE_LIST,
            payload:data
        }
    },
    getList() {
        return async (dispatch) => {
            const { data } = await getHeaderList();
            dispatch(header.changeList(data.data));
            const totalPage =Math.ceil(data.data.length / 10);
            dispatch(header.setTotalPage(totalPage))
        }
    },
    changeMouseIn(payload) {
        return {
            type: types.CHANGE_MOUSEIN,
            payload
        }
    },
    setTotalPage(totalPage) {
        return {
            type: types.SET_TOTALPAGE,
            payload: totalPage
        }
    },
    changeCurrentPage(currentPage) {
        return {
            type: types.CHANGE_CURRENT_PAGE,
            payload: currentPage
        }
    }
}
export default header;