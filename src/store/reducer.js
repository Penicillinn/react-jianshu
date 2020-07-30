import { combineReducers } from 'redux';
import { header } from './header';
import { todoReducer } from './todo_list';
import { homeReducer } from './home';
import { detailReducer } from './detail';
const reducer = combineReducers({
    header,
    todoReducer,
    homeReducer,
    detailReducer
})
export default reducer;