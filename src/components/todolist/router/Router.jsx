import React from 'react';
import { NavLink,Switch,Route } from 'react-router-dom';
import ListItem from '../list/List';
import Todo from '../todo/Todo';
const Router = (props) => {
    
    return (
        <div>
            <div style={{height: '40px',lineHeight: '40px',padding: '0 20px', display:'flex',justifyContent: 'space-around'}}>
                <span>
                    <NavLink to='/' exact>未完成</NavLink>
                </span>
                <span>
                    <NavLink to='/done'>已完成</NavLink>
                </span>
            </div>
            <Switch>
                <Route path='/' exact component={Todo} />
                <Route path='/done' component={ListItem} />
            </Switch>
        </div>
    )
}

export default Router;