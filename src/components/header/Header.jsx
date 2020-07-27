import React from 'react';
import {  CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import action from '../../store/action';
import {
    HeaderWraper,
    Logo,
    Addition,
    Additionitem,
    Center,
    CenterLeft,
    IndexPage,
    DownLoad,
    SearchInput,
    CenterRight,
    Aa,
    Login,
    SearchWrap
} from './style';
const Header = (props) => {
    const { isFocus,changeStatus } = props;
    return (
        <div>
            <HeaderWraper>
                <Logo />
                <Center>
                    <CenterLeft>
                        <IndexPage>首页</IndexPage>
                        <DownLoad>下载App</DownLoad>
                        <SearchWrap>
                            <CSSTransition
                                in={isFocus}
                                classNames="slide"
                                timeout={200}
                            >
                                <SearchInput 
                                    className={isFocus  ? 'focus' : ''}
                                    onFocus={e => changeStatus(true)}
                                    onBlur={e => changeStatus(false)}
                                />
                            </CSSTransition>
                            <i className={`iconfont iconfangdajing ${isFocus ? 'focus' : ''}`}></i>
                        </SearchWrap>
                    </CenterLeft>
                    <CenterRight>
                        <Aa>Aa</Aa>
                        <Login>登录</Login>
                    </CenterRight>
                </Center>
                <Addition>
                    <Additionitem className="reg">注册</Additionitem>
                    <Additionitem className="write">
                        <i className='iconfont iconbi' style={{marginRight: '3px'}}></i>
                        写文章
                    </Additionitem>
                </Addition>
            </HeaderWraper>
        </div>
    )
}

export default connect((state) => ({isFocus: state.header.isFocus}),action.header)(Header)
