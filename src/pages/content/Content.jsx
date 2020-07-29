import React, { Component } from 'react';
import { Switch,Route } from 'react-router-dom';
import { ContentWrp,WrpLeft,WrpRight } from './content';
import Home from '../home/Home';
export default class Content extends Component {
    render() {
        return (
            <ContentWrp>
                <WrpLeft>
                    <Switch>
                        <Route path='/' exact component={Home}></Route>
                    </Switch>
                </WrpLeft>
                <WrpRight></WrpRight>
            </ContentWrp>
        )
    }
}
