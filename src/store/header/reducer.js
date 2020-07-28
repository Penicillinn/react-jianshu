import * as types from './action-types';
const initialData = {
    isFocus: false,
    mouseIn: false,
    list: [],
    currentPage: 1,
    totalPage: 1
}
const header = (state = initialData,{ type,payload }) => {
    const newData = JSON.parse(JSON.stringify(state));
    switch(type) {
        case types.CHANGE_INPUT_STATUS:
            newData.isFocus = payload;
            break;
        case types.CHANGE_LIST: 
            newData.list = payload;
            break;
        case types.CHANGE_MOUSEIN:
            newData.mouseIn = payload;
            break;
        case types.SET_TOTALPAGE:
            newData.totalPage = payload;
            break;
        case types.CHANGE_CURRENT_PAGE:
            newData.currentPage = payload;
            break;
        default :
            return newData;
    }
    return newData;
}
export default header;