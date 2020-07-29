import request from './request';

export function getHomeList() {
    return request({
        url: '/api/home.json'
    })
}