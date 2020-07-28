import styled from 'styled-components';
import logoImg from '../../statics/logo.png';
import refresh from '../../statics/refresh.png';
export const HeaderWraper = styled.div`
    height: 57px;
    border-bottom: 1px solid #f0f0f0;
    display: flex;
`
export const Logo = styled.a.attrs({
    href: '/'
})`
    display: block;
    flex: 0 0 100px;
    height: 100%;
    background: url(${logoImg});
    background-size: contain
`
export const Center = styled.div `
    display: flex;
    flex: 1;
    justify-content: space-between;
    font-size: 15px;
    margin-left: 145px;
    margin-right: 10px;
`

export const SearchWrap = styled.div `
    position: relative;
    .iconfont {
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border-radius: 15px;
        position: absolute;
        right: 5px;
        bottom: 4px;
        color: #333;
        &.focus{
            background-color: #969696;
            color: #fff
        }
    }
`
export const HotReccomend = styled.div`
    position: absolute;
    width: 260px;
    padding: 20px;
    left: 0;
    top: 48px;
    background-color: #f3f0f0;
    border-radius: 5px;
`
export const Arrow = styled.div`
    position: absolute;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-top: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #eee;
    left: 20px;
    top: -20px;
`
export const HotTitle = styled.div`
    display: flex;
    justify-content: space-between;
    color: #969696;
    .left {
        font-size: 13px;
    }
    .right {
        font-size: 12px;
    }
`
export const Refresh = styled.span`
    display: inline-block;
    width: 17px;
    height: 17px;
    background: url(${refresh});
    background-size: contain;
    transition: all .2s ease-out;
    transform-origin: center center;
`
export const ReccomendList = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
`
export const ReccomendItem = styled.a.attrs({
    href: '/#'
})`
    display: block;
    padding: 5px;
    border: 1px solid #969696;
    margin-right: 7px;
    margin-bottom: 15px;
    font-size: 12px;
    color: #999;
    border-radius: 3px;
    text-decoration: none;
`

export const CenterLeft = styled.div `
    display: flex;
    align-items: center;
`
export const IndexPage = styled.div`
    width: 59px;
    height: 26px;
    padding: 15px;
    text-align: center;
    color: #ea6f5a;
    line-height: 26px;
`
export const DownLoad = styled.div`
    width: 59.25px;
    height: 26px;
    padding: 15px;
    text-align: center;
    color: #333;
    line-height: 26px;
`

export const SearchInput = styled.input.attrs({
    placeholder: '搜索'
}) `
    display: block;
    outline: none;
    border: 1px solid #eee;
    width: 160px;
    height: 36px;
    line-height: 36px;
    padding: 0 40px 0 20px;
    border-radius: 18px;
    background-color: #eee;
    &.focus{
        width: 240px;
    }
    &.slide-enter {
        transition: all 200ms ease-out;
    }
    &.slide-enter-active {
        width: 240px
    }
    &.slide-exit {
        transition: all 200ms ease-out;
    }
    &.slide-slide-active {
        width: 140px
    }
`
export const CenterRight = styled.div`
    display: flex;
`
export const Aa = styled.div `
    font-size: 15px;
    line-height: 58px;
    padding: 0 10px;
    color: #969696;
`
export const Login = styled.div `
    font-size: 15px;
    line-height: 58px;
    padding: 0 12px;
    color: #969696;
    margin: 0 6px 0 10px;
`

export const Addition = styled.div `
    flex: 0 0 220px;
    display: flex;
    height: 100%;
    align-items: center;
`
export const Additionitem = styled.div `
        height: 40px;
        line-height: 40px;
        border-radius: 20px;
        font-size: 15px;
        text-align: center;
        box-sizing: border-box;
        margin-right: 20px;
    &.reg {
        width: 80px;
        border: 1px solid rgba(236,97,73,.7);
        color: #ea6f5a;
        background-color: transparent;
    }
    &.write {
        width: 100px;
        color: #fff;
        background-color: #ea6f5a;
    }
`