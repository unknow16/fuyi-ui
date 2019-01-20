import request from '@/utils/request'

export function getList(pageNum, pageSize, query) {
    const data = {
        pageNum,
        pageSize,
        query
    }
    return request({
        url: '/upms/system/list',
        method: 'get',
        params: data
    })
}

export function add(info) {
    return request({
        url: '/upms/system/create',
        method: 'post',
        data: info
    })
}

export function update(id, info) {
    return request({
        url: '/upms/system/update/' + id,
        method: 'post',
        data: info
    })
}

// 多个用-分割
export function dels(ids) {
    return request({
        url: '/upms/system/delete/' + ids,
        method: 'get',
        params: ids
    })
}