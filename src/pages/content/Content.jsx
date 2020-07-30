import React, { Component } from 'react';
import { Switch,Route } from 'react-router-dom';
import { ContentWrp,WrpLeft,WrpRight } from './content';
import Home from '../home/Home';
import Detail from '../detail';
export default class Content extends Component {
    render() {
        return (
            <ContentWrp>
                <WrpLeft>
                    <Switch>
                        <Route path='/' exact component={Home}></Route>
                        <Route path='/detail/:id' component={Detail}></Route>
                    </Switch>
                </WrpLeft>
                <WrpRight></WrpRight>
            </ContentWrp>
        )
    }
}
