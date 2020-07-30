import React from 'react';
import {  CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { action } from '../../store/header';
import { loginAction } from '../../store/login'
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
    SearchWrap,
    HotReccomend,
    Arrow,
    HotTitle,
    ReccomendList,
    ReccomendItem,
    Refresh
} from './style';
const Header = (props) => {
    const { isFocus,mouseIn,isLogin,currentPage,totalPage,changeStatus,getList,list,changeMouseIn,changeCurrentPage,changeLoginStatus } = props;
    const showTenDatas = () => {
        let newList = [];
        if(list.length) {
            for(let i = (currentPage -1) * 10; i < currentPage * 10 ; i++) {
                newList.push(<ReccomendItem key={list[i]}>{ list[i] }</ReccomendItem>)
            }


        }
        return newList;
    }
    const handleChangePage = () => {
        const icon = document.getElementById('icon');
        const rotate = icon.style.transform;
        let angel = rotate.replace(/[^0-9]/ig,'');
        if(angel) {
            angel = Number(angel) + 360;
        }else {
            angel = 360;
        }
        icon.style.transform = `rotate(${angel}deg)`;
        if(currentPage < totalPage) {
            changeCurrentPage(currentPage + 1)
        }else {
            changeCurrentPage(1)
        }
    }
    const toggleReccomendListByIsFocus = (isFocus) => {
        if(isFocus || mouseIn) {
            return (
                <HotReccomend
                    onMouseEnter={e => changeMouseIn(true)}
                    onMouseLeave={ e => changeMouseIn(false)}
                >
                    <Arrow></Arrow>
                    <HotTitle>
                        <span className='left'>热门搜索</span>
                        <span className='right' style={{display: 'flex',alignItems:'center'}} onClick={e => handleChangePage()}>
                            <Refresh id="icon"></Refresh>
                            换一批
                        </span>
                    </HotTitle>
                    <ReccomendList>
                        {showTenDatas()}
                    </ReccomendList>
                </HotReccomend>
            )
        }
        return null;
    }
    const handleFocus = () => {
        changeStatus(true);
        getList();
    }
    const handleLogout = () => {
        changeLoginStatus(false)
    }
    return (
        <div>
            <HeaderWraper>
                <Logo />
                <Center>
                    <CenterLeft>
                        <IndexPage>
                            <Link to='/'>首页</Link>
                        </IndexPage>
                        <DownLoad>下载App</DownLoad>
                        <SearchWrap>
                            <CSSTransition
                                in={isFocus}
                                classNames="slide"
                                timeout={200}
                            >
                                <SearchInput 
                                    className={isFocus  ? 'focus' : ''}
                                    onFocus={e => handleFocus()}
                                    onBlur={e => changeStatus(false)}
                                />
                            </CSSTransition>
                            <i className={`iconfont iconfangdajing ${isFocus ? 'focus' : ''}`}></i>
                            {
                                toggleReccomendListByIsFocus(isFocus)
                            }
                        </SearchWrap>
                    </CenterLeft>
                    <CenterRight>
                        <Aa>Aa</Aa>
                        {
                            isLogin ? <Login onClick={e => handleLogout()}>退出</Login> : <Link to='/login'><Login>登录</Login></Link>
                        }
                        
                    </CenterRight>
                </Center>
                <Addition>
                    <Additionitem className="reg">注册</Additionitem>
                    <Additionitem className="write">
                        <i className='iconfont iconbi' style={{marginRight: '3px'}}></i>
                        <Link to='/write'>写文章</Link>
                    </Additionitem>
                </Addition>
            </HeaderWraper>
        </div>
    )
}

export default connect((state) => ({
    isFocus: state.header.isFocus,
    list: state.header.list,
    mouseIn: state.header.mouseIn,
    currentPage: state.header.currentPage,
    totalPage: state.header.totalPage,
    isLogin: state.LoginReducer.isLogin
}),{...action,...loginAction})(Header)
