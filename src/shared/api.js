import axios from 'axios'

// ******** Axios 인스턴스 생성 ******** //

const api = axios.create({
  baseURL: 'http://13.124.48.149/',
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
  // **** post **** //
  addPost: (contents) => api.post('/api/posts', contents),
  editPost: (postId, newPost) => api.put(`/api/posts/${postId}`, newPost),
  deletePost: (postId) => api.delete(`/api/posts/${postId}`),
  // get posts에서 한 postId의 comment 데이터까지 한 번에 가져오도록 수정할 건지 백 확인 필요
  posts: () => api.get('/api/posts'),

  // **** user **** //
  login: (email, password) => api.post('/api/auth/login', { email: email.email, password: email.password }),
  register: (email, nickname, password, passwordCheck) => api.post('/api/auth/register', { email: email, nickname: nickname, password: password, passwordCheck: passwordCheck }),
  users: () => api.get('/api/auth'),

  // **** tag **** //
}
