import React, { Component } from 'react';
import HomeList from './home_list/HomeList.jsx';
import HomeArticle from './home_article/HomeArticle.jsx';
export default class Home extends Component {
    render() {
        return (
            <div>
                <HomeList />
                <HomeArticle />
            </div>
        )
    }
}
