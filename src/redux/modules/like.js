import { createAction, handleActions } from 'redux-actions'
import { produce } from 'immer'
import { apis } from '../../shared/api'

/* Action type */
const GET_LIKE_USER = 'GET_LIKE_USER'
const CLICK_LIKE = 'CLICK_LIKE'
const CANCEL_LIKE = 'CANCEL_LIKE'

/* Action creator */
const getLikeUser = createAction(GET_LIKE_USER, (boardId, like_user_list) => ({ boardId, like_user_list }))
const clickLike = createAction(CLICK_LIKE, (boardId, like_user) => ({ boardId, like_user }))
const cancleLike = createAction(CANCEL_LIKE, (boardId, userId) => ({ boardId, userId }))

/* Initial data */
const InitialState = {
  like_list: {},
}

/* Middleware */

const getLikeUserDB = (boardId) => {
  return async function (dispatch, getState, { history }) {
    apis
      .getLikeUser(boardId)
      .then((res) => {
        const userIds = res.data.userIds
        dispatch(getLikeUser(boardId, userIds))
      })
      .catch((err) => {
        console.log('유저 정보를 불러오는 데 문제가 발생했습니다.', err.response)
      })
  }
}

const clickLikeDB = (boardId, userId) => {
  return async function (dispatch, getState, { history }) {
    // 좋아요 클릭한 게시글과 유저 정보를 보내주면
    // response로 해당 게시글에 좋아요를 누른 유저 정보 받아오기 userId ?
    // 그래도 response 찍어보기
    apis.clickLike(boardId).then((res) => {
      console.log(res)
      // dispatch(clickLike(boardId, userId))
    })
    // dispatch(clickLike(boardId, userId) // 좋아요 누른 유저 배열 형태의 데이터 리덕스에 저장
    // apis.clickLike(boardId)
  }
}

const cancelLikeDB = (boardId, userId) => {
  return async function (dispatch, getState, { history }) {
    // 좋아요 취소한 게시글과 유저 정보 보내기
    // response로 받아올 데이터는 X
    // 그래도 response 찍어보기
    apis.clickLike(boardId).then((res) => {
      console.log(res)
    })
    // dispatch(cancleLike(boardId, userId)) // 리덕스에 저장되어 있는 유저 리스트에서 userId 제거
    // apis.clickLike(boardId)
  }
}

/* Reducer */

export default handleActions(
  {
    [GET_LIKE_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.like_list[action.payload.boardId] = action.payload.like_user_list
      }),
    [CLICK_LIKE]: (state, action) =>
      produce(state, (draft) => {
        draft.like_list[action.payload.boardId].unshift(action.payload.like_user)
      }),
    [CANCEL_LIKE]: (state, action) =>
      produce(state, (draft) => {
        draft.like_list[action.payload.boardId].filter((userId) => userId !== action.payload.userId) // 확인 필요
      }),
  },
  InitialState
)

/* Export */

const actionCreators = {
  getLikeUser,
  getLikeUserDB,
  clickLikeDB,
  clickLike,
  cancelLikeDB,
  cancleLike,
}

export { actionCreators }
