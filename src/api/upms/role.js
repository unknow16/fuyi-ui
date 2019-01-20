import request from '@/utils/request'

export function getList(pageNum, pageSize, query) {
    const data = {
        pageNum,
        pageSize,
        query
    }
    return request({
        url: '/upms/role/list',
        method: 'get',
        params: data
    })
}

export function addRole(roleInfo) {
    return request({
        url: '/upms/role/create',
        method: 'post',
        data: roleInfo
    })
}

export function updateRole(roleId, roleInfo) {
    return request({
        url: '/upms/role/update/' + roleId,
        method: 'post',
        data: roleInfo
    })
}

// 多个用-分割
export function deleteRole(roleIds) {
    return request({
        url: '/upms/role/delete/' + roleIds,
        method: 'get',
        params: roleIds
    })
}

export function rolePermission(roleId) {
    return request({
        url: '/upms/role/permission/' + roleId,
        method: 'get',
        params: roleId
    })
}

export function updateRolePermission(roleId, checkedArray) {
    return request({
        url: '/upms/role/permission/' + roleId,
        method: 'post',
        data: checkedArray
    })
}