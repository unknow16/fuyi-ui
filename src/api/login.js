import request from '@/utils/request'

export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: '/auth/getToken',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo() {
  return request({
    url: '/user/getUserInfo',
    method: 'post'
  })
}

export function getUserRouteMenu() {
  return request({
    url: '/permission/initMenu',
    method: 'get'
  })
}

