import request from '@/utils/request'

export function getList(pageNum, pageSize, query) {
    const data = {
        pageNum,
        pageSize,
        query
    }
    return request({
        url: '/upms/system/list',
        method: 'post',
        data
    })
}