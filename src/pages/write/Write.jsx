import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
const Write = (props) => {
    const showCpnByIsLogin = () => {
        console.log(props.isLogin);
        const { isLogin } = props;
        if(!isLogin) {
            return <Redirect to='/login' />
        }
        return <div>写文章</div>
    }
    return (
        <div>
            {showCpnByIsLogin()}
        </div>
    )
}

export default connect(state =>({...state.LoginReducer}))(Write);