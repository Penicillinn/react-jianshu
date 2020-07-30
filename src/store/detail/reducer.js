import * as types from './action-types';
const initialData = {
    data: {}
}
const reducer  = (state=initialData,action) => {
    const newData = JSON.parse(JSON.stringify(state));
    switch(action.type) {
        case types.CHANGE_DATA: 
            newData.data = action.data;
            break;
        default:
            return newData;
    }
    return newData;
}

export default reducer;