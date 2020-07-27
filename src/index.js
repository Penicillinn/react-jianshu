import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import { GlobalStyle } from './styles';
import './statics/iconfont/iconfont.css';
import { Provider } from 'react-redux';
import store from './store';
import 'antd/dist/antd.css';
import TodoList from './components/todolist';
ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    {/* <App /> */}
    <TodoList />
  </Provider>,
  document.getElementById('root')
);
