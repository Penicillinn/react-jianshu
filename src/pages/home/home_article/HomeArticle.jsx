import React, { Component } from 'react';
import { ArticleItem,ArticleText,ArticleImg } from './homeArticle.js';
import { connect } from 'react-redux';
class HomeArticle extends Component {
    render() {
        const { articleList } = this.props;
        return (
            <div>
                {
                    articleList.map(item => {
                        return (
                            <ArticleItem key={item.id}>
                                <ArticleText>
                                    <h2>{item.title}</h2>
                                    <p>{item.desc}</p>
                                </ArticleText>
                                <ArticleImg>
                                    <img src={item.imgUrl} alt=""/>
                                </ArticleImg>
                            </ArticleItem>
                        )
                    })
                }
            </div>
        )
    }
}

export default connect(state => ({ ...state.homeReducer }))(HomeArticle);