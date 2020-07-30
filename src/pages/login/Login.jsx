import React from 'react';
import { connect } from 'react-redux';
import { loginAction } from '../../store/login';
import  { Redirect } from 'react-router-dom';
const Login = (props) => {
    const handleLogin = () => {
        const { checkAccount } = props;
        checkAccount({
            name: document.getElementById('account').value,
            pwd: document.getElementById('password').value
        })
    }
    const showCpnByIsLogin = () => {
        const { isLogin } = props;
        if(!isLogin) {
            return (
                <div>
                    <input type="text" id="account"/>
                    <input id="password" type="password"/>
                    <button onClick={e => handleLogin()}>登录</button>
                </div>
            )
        }
        return <Redirect to='/'></Redirect>
    }
    return (
        <div>
            {showCpnByIsLogin()}
        </div>
    )
}

export default connect(state => ({ ...state.LoginReducer }),loginAction)(Login);