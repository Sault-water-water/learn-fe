
import hyRequest from "@/service";

export function postUsersListData(quaryInfo:any) {
  return hyRequest.post({
    url: '/users/list',
    data:quaryInfo
  })
}

export function deleteUserById(id:number) {
  return hyRequest.delete({
    url:`/users/${id}`,
  })
}

export function addUser(userInfo:any) {
  return hyRequest.post({
    url: '/users',
    data:userInfo
  })
}


export function updateUser(id: number, userInfo: any) {
  return hyRequest.patch({
    url: `/users/${id}`,
    data:userInfo
  })
}




// 针对页面的抽取
export function postPageListData(pageName:string,quaryInfo:any) {
  return hyRequest.post({
    url: `/${pageName}/list`,
    data:quaryInfo
  })
}

export function deletePageData(pageName:string,id:number) {
  return hyRequest.delete({
    url:`/${pageName}/${id}`,
  })
}

export function addData(pageName:string,dataInfo:any) {
  return hyRequest.post({
    url: `/${pageName}`,
    data:dataInfo
  })
}


export function updateData(pageName:string,id: number, dataInfo: any) {
  return hyRequest.patch({
    url: `/${pageName}/${id}`,
    data:dataInfo
  })
}


