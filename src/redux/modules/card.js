import { createAction, handleActions } from 'redux-actions'
import { produce } from 'immer'
import { apis } from '../../shared/api'
import { setCookie, deleteCookie, getCookie } from '../../shared/Cookie'

const SEARCH_CARD = 'SEARCH_CARD'
const LOAD_CARD = 'LOAD_CARD'
const ADD_CARD = 'ADD_CARD'
const ONE_CARD = 'ONE_CARD'
const EDIT_CARD = 'EDIT_CARD'
const DELETE_CARD = 'DELETE_CARD'

const searchCard = createAction(SEARCH_CARD, (search_list) => ({ search_list }))
const getCard = createAction(LOAD_CARD, (card_list) => ({ card_list }))
const addCard = createAction(ADD_CARD, (card) => ({ card }))
const getOneCard = createAction(ONE_CARD, (card) => ({ card }))
const editCard = createAction(EDIT_CARD, (card) => ({ card }))
const deleteCard = createAction(DELETE_CARD, (id) => ({ id }))

const initialState = {
  card_list: [],
  search_list: [],
  one_card: '',
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
        dispatch(addCard(response))
        history.push('/')
      })
      .catch((err) => {
        console.log(err.response)
      })
  }
}

const getCardDB = (id) => {
  return async function (dispatch, getState, { history }) {
    await apis
      .allPosts(id)
      .then(function (response) {
        console.log(response)
        dispatch(getCard(response.data))
      })
      .catch((err) => {
        console.log(err.response)
      })
  }
}

const searchCardDB = (tagId) => {
  return async function (dispatch, getState, { history }) {
    await apis
      .tagPosts(tagId)
      .then(function (response) {
        console.log(response)
        dispatch(searchCard(response.data))
      })
      .catch((err) => {
        console.log(err.response)
      })
  }
}

const getOneCardDB = (id) => {
  return async function (dispatch, getState, { history }) {
    await apis
      .onePost(id)
      .then(function (response) {
        console.log(response)
        dispatch(getOneCard(response.data))
      })
      .catch((err) => {
        console.log(err.response)
      })
  }
}

const editCardDB = (id, tag, location, content,) => {
  return async function (dispatch, getState, { history }) {
    // console.log(id, tag, location, content)
    // return;
    const token = getCookie('token')
    const card_info = {
      tagname: tag,
      location: location,
      description: content,
    }

    await apis
      .editPost(id, card_info,{
        headers: { Authorization: token },
      })
      .then(function (response) {
        console.log(response)
        dispatch(editCard(response.data))
      })
      .catch((err) => {
        console.log(err.response)
      })
  }
}

const deleteCardDB = (id) => {
  return async function (dispatch, getState, { history }) {
    // console.log(id, tag, location, content)
    // return;
    const token = getCookie('token')
    await apis
      .deletePost(id,{
        headers: { Authorization: token },
      })
      .then(function (response) {
        console.log(response)
        dispatch(deleteCard(id))
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

    [ONE_CARD]: (state, action) =>
      produce(state, (draft) => {
        draft.one_card = action.payload.card
      }),

    [EDIT_CARD]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload.card)
        let idx = draft.card_list.findIndex((p) => p.boardId === action.payload.card.boardId);

        draft.card_list[idx] = { ...draft.card_list[idx], ...action.payload.card };
      }),

    [DELETE_CARD]: (state, action) =>
      produce(state, (draft) => {
        

        const new_dict = draft.card_list.filter((c, idx) => {
          return c.boardId !== action.payload.id;})

        console.log(new_dict)
        
        draft.card_list = new_dict

        console.log(draft.card_list)
        
      }),

    [SEARCH_CARD]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload.search_list)
        draft.search_list = action.payload.search_list
      }),

    [ADD_CARD]: (state, action) =>
      produce(state, (draft) => {
        draft.card_list.unshift(action.payload.card)
      }),
  },
  initialState
)

const actionCreators = {
  addCardDB,
  getCardDB,
  searchCardDB,
  getOneCardDB,
  editCardDB,
  deleteCardDB,
  searchCard,
  getCard,
  addCard,
  getOneCard,
}

export { actionCreators }
