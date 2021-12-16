import { createAction, handleActions } from 'redux-actions'
import { produce } from 'immer'
import { apis } from '../../shared/api'
import { setCookie, deleteCookie, getCookie } from '../../shared/Cookie'


const SEARCH_CARD = "SEARCH_CARD";
const LOAD_CARD = "LOAD_CARD";
const ADD_CARD = "ADD_CARD";
const ONE_CARD = "ONE_CARD";
const USER_CARD = 'USER_CARD'


const searchCard = createAction(SEARCH_CARD, (search_list) => ({search_list}));
const getCard = createAction(LOAD_CARD, (card_list) => ({card_list}));
const addCard = createAction(ADD_CARD, (card) => ({card}));
const getOneCard = createAction(ONE_CARD, (card) => ({card}));
const userCard = createAction(USER_CARD, (card_list) => ({ card_list }))




const initialState = {  
    card_list : [],
    search_list : [],
    one_card: "",
    user_card_list: [],
};


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
    return async function (dispatch, getState, {history}){
        
        await apis.allPosts(id).then(function(response){
            console.log(response)
            dispatch(getCard(response.data))
        }).catch((err) => {
            console.log(err.response)
        })
        

    };
};

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
    return async function (dispatch, getState, {history}){
        await apis.onePost(id).then(function(response){
            console.log(response)
            dispatch(getOneCard(response))
        }).catch((err) => {
            console.log(err.response)
        })

    };
};


const userCardDB = () => {
  return async function (dispatch, getState, { history }) {
    await apis
      .userPosts()
      .then(function (response) {
        console.log(response)
        console.log(response.data)
        dispatch(userCard(response.data))
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
                draft.card_list = action.payload.card_list;
            }),
        [ONE_CARD]: (state, action) =>
            produce(state, (draft) => {
                draft.one_item = action.payload.card;
            }),
        [SEARCH_CARD]: (state, action) =>
            produce(state, (draft) => {
                console.log(action.payload.search_list)
                draft.search_list = action.payload.search_list;
            }),
        [ADD_CARD]: (state, action) =>
            produce(state, (draft) => {
                draft.card_list.unshift(action.payload.card);
            }),
        [USER_CARD]: (state, action) =>
          produce(state, (draft) => {
            draft.user_card_list = action.payload.user_card_list
          }),
  },
  initialState
)

const actionCreators = {
    addCardDB,
    getCardDB,
    searchCardDB,
    getOneCardDB,
    searchCard,
    getCard,
    addCard,
    getOneCard
    userCardDB,
    userCard,
};

export { actionCreators }
