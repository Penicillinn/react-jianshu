import * as types from './action-types';
const initialData = {
    todoList: [
        {
            name: 'kobe',
            id: 0,
            isDone: false
        },
        {
            name: 'wade',
            id: 1,
            isDone: true
        },
        {
            name: 'james',
            id: 2,
            isDone: false
        },
    ]
}

const todoReducer = (state=initialData,{ type,payload }) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch(type) {
        case types.ADD_TODO:
            newState.todoList.unshift(payload);
            break;
        case types.CHANGE_STATUS:
            newState.todoList.find(item => item.id === payload.id).isDone = payload.status;
            break;
        case types.DELETE_TODO:
            newState.todoList = newState.todoList.filter(item => item.id !== payload);
            break;
        default: 
            return newState;
    }
    return newState;
}

export default todoReducer;