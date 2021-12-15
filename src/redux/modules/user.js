import { createAction, handleActions } from 'redux-actions'
import { produce } from 'immer'

import { setCookie, deleteCookie } from '../../shared/Cookie'
import { apis } from '../../shared/api'

// **** Action type **** //
const LOG_IN = 'LOG_IN'
const LOG_OUT = 'LOG_OUT'
const GET_USER = 'GET_USER'

// **** Action creator **** //
const logIn = createAction(LOG_IN, (user) => ({ user }))
const logOut = createAction(LOG_OUT, (user) => ({ user }))

// **** Initial data **** //
const initialState = {
  user: null,
  is_login: false,
}

// **** Middleware **** //

const joinDB = (email, password, fullname, nickname) => {
  return async function (dispatch, getState, { history }) {
    await apis
      .join(email, password, fullname, nickname)
      .then((res) => {
        console.log(res.data)
        //   if (res.data.errorMsg === '이미 존재하는 이메일입니다') {
        //     window.alert('이미 존재하는 이메일입니다.')
        //     return
        //   }
        //   if (res.data.errorMsg === '이메일은 필수 입력 값입니다') {
        //     window.alert('이메일은 필수 입력 값입니다.')
        //     return
        //   }
        //   if (res.data.errorMsg === '패스워드는 필수 입력 값입니다') {
        //     window.alert('패스워드는 필수 입력 값입니다.')
        //     return
        //   }
        //   if (res.data.errorMsg === '이름은 필수 입력 값입니다') {
        //     window.alert('이름은 필수 입력 값입니다.')
        //     return
        //   }
        //   if (res.data.errorMsg === '닉네임은 필수 입력 값입니다') {
        //     window.alert('닉네임은 필수 입력 값입니다.')
        //     return
        //   }
        // history.push('/login')
        // window.alert('Congratuation! After login, enjoy Unsplash.')
      })
      .catch((err) => {
        console.log('회원가입에 문제가 발생했습니다.', err)
      })
  }
}

const logInDB = (email, password) => {
  return async function (dispatch, getState, { history }) {
    await apis
      .login(email, password)
      .then((res) => {
        console.log(res.data)
        console.log(res.headers)
        setCookie('token', res.headers.Authorization, 3)
        localStorage.setItem('userId', res.data.user.userId)
        localStorage.setItem('nickname', res.data.user.nickname)
        // dispatch(logIn({}))
        // history.replace('/')
      })
      .catch((err) => {
        console.log('로그인에 문제가 발생했습니다.', err)
      })
  }
}

const logOutDB = () => {
  return async function (dispatch, getState, { history }) {
    deleteCookie('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('nickname').then(() => {
      dispatch(logOut())
      history.replace('/')
    })
  }
}

// **** Reducer **** //
export default handleActions(
  {
    [LOG_IN]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user
        draft.is_login = true
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        draft.user = null
        draft.is_login = false
      }),
  },
  initialState
)

// **** Export **** //
const actionCreators = {
  joinDB,
  logInDB,
  logOutDB,
  logOut,
}

export { actionCreators }
