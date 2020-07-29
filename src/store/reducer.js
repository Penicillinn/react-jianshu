import { combineReducers } from 'redux';
import { header } from './header';
import { todoReducer } from './todo_list';
import { homeReducer } from './home';
const reducer = combineReducers({
    header,
    todoReducer,
    homeReducer
})
export default reducer;