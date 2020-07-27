import React, { Component } from 'react'
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import store from './store';
import Header from './components/header/Header';
import Content from './pages/content/Content.jsx';
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Header />
          <Content />
        </HashRouter>
      </Provider>
    )
  }
}
