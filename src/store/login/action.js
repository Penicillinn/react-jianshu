import * as types from './action-types';
import { checkAccount  } from '../../network/checkAcount';
const action = {
    changeLoginStatus(status) {
        return {
            type: types.CHANGE_STATUS_LOGIN,
            status
        }
    },
    checkAccount(obj) {
        return async (dispatch) => {
            const { data } = await checkAccount(obj);
            dispatch(action.changeLoginStatus(data.data))
        }
    }
}

export default action;