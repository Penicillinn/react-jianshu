import * as types from './action-types';
const initialState = {
    list: [],
    articleList: []
}
export default (state = initialState,{type,data}) => {
    let newState = JSON.parse(JSON.stringify(state));
    switch(type) {
        case types.GET_LIST:
            newState.list = data.topicList;
            newState.articleList = data.articleList;
            break;
        default:
            return newState;
    }
    return newState;
}