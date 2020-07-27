import * as types from '../../action-types';

const header = {
    changeStatus(status) {
        return {
            type: types.CHANGE_INPUT_STATUS,
            payload: status
        }
    }
}
export default header;