import styled from 'styled-components';

export const ArticleItem = styled.div`
    display: flex;
    border-bottom: 1px solid #eee;
    margin-top: 10px;
`
export const ArticleText = styled.div`
    flex: 1;
    p {
        font-size: 13px;
        color: #666;
        margin: 10px 0;
    }
`
export const ArticleImg = styled.div`
    width: 200px;
    height: 60px;
    img {
        widht: 100%;
        height: 100:
    }
`

export const LoadMore = styled.div`
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    background-color: #666;
    color: #eee;
    cursor: pointer;
`

export const BackTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 100px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid black;
    font-size: 12px;
`