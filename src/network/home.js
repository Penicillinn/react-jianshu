import request from './request';

export function getHomeList() {
    return request({
        url: '/api/home.json'
    })
};

export function getLoadMore() {
    return request ({
        url: '/api/homeList.json'
    })
}