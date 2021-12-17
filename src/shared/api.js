import axios from 'axios'

// ******** Axios 인스턴스 생성 ******** //

const api = axios.create({
  baseURL: 'http://3.37.86.143/',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-type': 'application/json; charset=UTF-8',
    accept: 'application/json',
  },
})

// ******** Interceptor를 통한 Header 설정 ******** //

api.interceptors.request.use((config) => {
  const accessToken = document.cookie.split('=')[1]
  config.headers.common['authorization'] = `${accessToken}`
  return config
})

// ******** Export api ******** //

export const apis = {
  // **** board **** //
  // post info: nickname, multiPartFile, location, tagname, description, size
  addPost: (post) => api.post('/api/board', post),
  // newPost info: location, tagname, description
  editPost: (boardId, newPost) => api.put(`/api/board/edit/${boardId}`, newPost),
  deletePost: (boardId) => api.delete(`/api/board/detail/${boardId}`),
  allPosts: () => api.get('/api/main'),
  onePost: (boardId) => api.get(`/api/board/detail/${boardId}`),
  userPosts: () => api.get(`api/user/mypage/boardlist`),

  // **** user **** //
  join: (email, password, fullname, nickname) => api.post('/user/join', { username: email, password: password, name: fullname, nickname: nickname }),
  login: (email, password) => api.post('/user/login', { username: email, password: password }),

  // **** tag **** //
  tagPosts: (tagId) => api.get(`/api/tag/${tagId}`),

  // **** like **** //
  like: (boardId) => api.post(`/api/board/like/${boardId}`),
}
