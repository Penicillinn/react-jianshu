import React, { Component } from 'react';
import { ArticleItem,ArticleText,ArticleImg,LoadMore,BackTop } from './homeArticle.js';
import { connect } from 'react-redux';
import action from '../../../store/home/action';
import { Link } from 'react-router-dom';
class HomeArticle extends Component {
    componentDidMount() {
        window.addEventListener('scroll',this.scrollChange)
    }
    componentWillUnmount() {
        window.removeEventListener('scroll',this.scrollChange)
    }
    render() {
        const { articleList,showBackTop } = this.props;
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
                                    <Link to={'/detail/'+item.id}><h2>{item.title}</h2></Link>
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
                {showBackTop ? <BackTop onClick={e => this.handleTop()}>回到顶部</BackTop> : null}
            </div>
        )
    }
    scrollChange = (e) => {
        // console.log(this.props)
        const { changeBacktop } = this.props;
        if(document.documentElement.scrollTop > 100) {
            changeBacktop(true)
        }else {
            changeBacktop(false)
        }
    }
    handleTop() {
        document.documentElement.scrollTo(0,0)
    }
}

export default connect(state => ({ ...state.homeReducer }),action)(HomeArticle);