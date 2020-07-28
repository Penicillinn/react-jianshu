import request from './request';

export function getHeaderList() {
    return request({
        url: '/api/headerList.json'
    })
}