
import request from '..'

export function getCode(data: any) {
  return request.post({
    url: '/login/code',
    data
  })
}
export function login(data: any) {
  return request.post({
    url: '/login',
    data
  })
}

// 协议文件
export function getPolicy(data: any) {
  return request.get({
    url: 'policy_protocol/list',
    data
  })
}

