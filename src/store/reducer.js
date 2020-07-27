import { combineReducers } from 'redux';
import { header } from './header';
import { todoReducer } from './todo_list';
const reducer = combineReducers({
    header,
    todoReducer
})
export default reducer;