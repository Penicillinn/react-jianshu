import * as types from './action-types';
const initialData = {
    isLogin: true
}
const reducer = (state=initialData,action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch(action.type) {
        case types.CHANGE_STATUS_LOGIN:
            newState.isLogin = action.status;
            break;
        default :
            return newState;
    }
    return newState;
}

export default reducer;