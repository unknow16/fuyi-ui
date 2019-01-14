import request from '@/utils/request'

export function getList(pageNum, pageSize, query) {
    const data = {
        pageNum,
        pageSize,
        query
    }
    return request({
        url: '/upms/user/list',
        method: 'get',
        params: data
    })
}

export function addUser(userInfo) {
    return request({
        url: '/upms/user/create',
        method: 'post',
        data: userInfo
    })
}

export function updateUser(userId, userInfo) {
    return request({
        url: '/upms/user/update/' + userId,
        method: 'post',
        data: userInfo
    })
}

export function deleteUser(userIds) {
    return request({
        url: '/upms/user/delete/' + userIds,
        method: 'get',
        params: userIds
    })
}