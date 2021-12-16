import { createAction, handleActions } from 'redux-actions'
import { produce } from 'immer'
import { apis } from '../../shared/api'
import { setCookie, deleteCookie, getCookie } from '../../shared/Cookie'

const LOAD_CARD = 'LOAD_CARD'
const ADD_CARD = 'ADD_CARD'
const USER_CARD = 'USER_CARD'

const getCard = createAction(LOAD_CARD, (card_list) => ({ card_list }))
const addCard = createAction(ADD_CARD, (card) => ({ card }))
const userCard = createAction(USER_CARD, (card_list) => ({ card_list }))

const initialState = {
  card_list: [],
  user_card_list: [],
}

//미들웨어
const addCardDB = (img, tag, location, content, size) => {
  return async function (dispatch, getState, { history }) {
    const nick = localStorage.getItem('nickname')
    const token = getCookie('token')
    const addFormData = new FormData()
    // console.log(nick)
    // console.log(token)
    const card_info = {
      nickname: nick,
      tagname: tag,
      location: location,
      description: content,
      size: size,
    }

    addFormData.append('multipartFile', img)
    addFormData.append('photoBoardRequestDto', new Blob([JSON.stringify(card_info)], { type: 'application/json' }))
    await apis
      .addPost(addFormData, {
        headers: { Authorization: token },
      })
      .then(function (response) {
        console.log(response)
        dispatch(addCard(response))
        // history.push("/");
      })
      .catch((err) => {
        console.log(err.response)
      })
  }
}

const getCardDB = () => {
  return async function (dispatch, getState, { history }) {
    await apis
      .allPosts()
      .then(function (response) {
        console.log(response)
        dispatch(getCard(response))
      })
      .catch((err) => {
        console.log(err.response)
      })
  }
}

const userCardDB = () => {
  return async function (dispatch, getState, { history }) {
    await apis
      .userPosts()
      .then(function (response) {
        console.log(response)
        dispatch(userCard(response))
      })
      .catch((err) => {
        console.log(err.response)
      })
  }
}

export default handleActions(
  {
    [LOAD_CARD]: (state, action) =>
      produce(state, (draft) => {
        draft.card_list = action.payload.card_list
      }),
    [ADD_CARD]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload.card)
        draft.card_list.unshift(action.payload.card)
      }),
    [USER_CARD]: (state, action) =>
      produce(state, (draft) => {
        draft.user_card_list = action.payload.card_list
      }),
  },
  initialState
)

const actionCreators = {
  addCardDB,
  getCardDB,
  userCardDB,
}

export { actionCreators }
