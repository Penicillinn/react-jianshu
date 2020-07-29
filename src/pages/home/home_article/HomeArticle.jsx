import React, { Component } from 'react';
import { ArticleItem,ArticleText,ArticleImg,LoadMore } from './homeArticle.js';
import { connect } from 'react-redux';
import action from '../../../store/home/action';
class HomeArticle extends Component {
    render() {
        const { articleList } = this.props;
        const handleLoad = () => {
            this.props.loadMore();
        }
        return (
            <div>
                {
                    articleList.map((item,index) => {
                        return (
                            <ArticleItem key={index}>
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
                <LoadMore onClick={e => handleLoad()}>加载更多</LoadMore>
            </div>
        )
    }
}

export default connect(state => ({ ...state.homeReducer }),action)(HomeArticle);