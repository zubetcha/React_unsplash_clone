import { createAction, handleActions } from 'redux-actions'
import { produce } from 'immer'

import { setCookie, deleteCookie } from '../../shared/Cookie'
import { apis } from '../../shared/api'

// **** Action type **** //
const LOG_IN = 'LOG_IN'
const LOG_OUT = 'LOG_OUT'
const GET_USER = 'GET_USER'
const USER_CARD = 'USER_CARD'
const LOADING = 'LOADING'

// **** Action creator **** //
const logIn = createAction(LOG_IN, (user) => ({ user }))
const logOut = createAction(LOG_OUT, (user) => ({ user }))
const userCard = createAction(USER_CARD, (user_card_list) => ({ user_card_list }))
const loading = createAction(LOADING, (is_loading) => ({ is_loading }))

// **** Initial data **** //
const initialState = {
  user: null,
  is_login: false,
  user_card_list: [],
  is_loading: false,
}

// **** Middleware **** //

const joinDB = (email, password, fullname, nickname) => {
  return async function (dispatch, getState, { history }) {
    await apis
      .join(email, password, fullname, nickname)
      .then((res) => {
        history.push('/login')
        window.alert('Welcome! After login, enjoy Unsplash.')
      })
      .catch((err) => {
        const errorMsg = err.response.data.errorMsg
        window.alert(errorMsg)
        console.log('회원가입에 문제가 발생했습니다.', errorMsg)
      })
  }
}

const logInDB = (email, password) => {
  return async function (dispatch, getState, { history }) {
    await apis
      .login(email, password)
      .then((res) => {
        const user_id = res.data.userId
        const nickname = res.data.nickname
        setCookie('token', res.headers.authorization, 3)
        localStorage.setItem('userId', user_id)
        localStorage.setItem('nickname', nickname)
        dispatch(logIn({ email: email, user_id: user_id, nickname: nickname }))
        history.replace('/')
      })
      .catch((err) => {
        console.log('로그인에 문제가 발생했습니다.', err.response)
      })
  }
}

const logOutDB = () => {
  return async function (dispatch, getState, { history }) {
    deleteCookie('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('nickname')
    dispatch(logOut())
    history.replace('/')
  }
}

const userCardDB = () => {
  return async function (dispatch, getState, { history }) {
    await apis
      .userPosts()
      .then(function (response) {
        dispatch(userCard(response.data))
      })
      .catch((err) => {
        console.log(err.response)
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
    [USER_CARD]: (state, action) =>
      produce(state, (draft) => {
        draft.user_card_list = action.payload.user_card_list
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
  userCardDB,
  userCard,
}

export { actionCreators }
