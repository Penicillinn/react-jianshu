import * as types from './action-types';
const todoAction = {
    addTodo(payload) {
        return {
            type: types.ADD_TODO,
            payload
        }
    },
    changeStatus(payload) {
        return {
            type: types.CHANGE_STATUS,
            payload
        }
    },
    deleteItem(payload) {
        return {
            type: types.DELETE_TODO,
            payload
        }
    }
}

export default todoAction;