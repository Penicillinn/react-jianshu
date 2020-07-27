import React, { Component } from 'react'
import InputButton from './input_button';
import Router from './router/Router';
import { HashRouter } from 'react-router-dom';
export default class TodoList extends Component {
    render() {
        return (
            <div style={{width: '400px', margin: '200px auto'}}>
                <InputButton />
                <HashRouter>
                    <Router />
                </HashRouter>
            </div>
        )
    }
}
