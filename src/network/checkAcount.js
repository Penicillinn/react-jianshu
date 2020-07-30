import request from './request';

export function checkAccount(obj) {
    console.log(obj);
    return request({
        url: '/api/login.json'
    })
}