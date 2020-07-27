import * as types from '../../action-types';
const initialData = {
    isFocus: false
}
const header = (state = initialData,{ type,payload }) => {
    const newData = JSON.parse(JSON.stringify(state));
    switch(type) {
        case types.CHANGE_INPUT_STATUS:
            newData.isFocus = payload;
            break;
        default :
            return newData;
    }
    return newData;
}
export default header;