import {request} from './request'

// 在这里对home首页的网络请求统一管理
export function getHomeMultidata(){
    return request({
        url:'/home/multidata'
    })
}