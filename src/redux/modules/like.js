import { createAction, handleActions } from 'redux-actions'
import { produce } from 'immer'
import { apis } from '../../shared/api'

/* Action type */
const CLICK_LIKE = 'CLICK_LIKE'
const CANCEL_LIKE = 'CANCEL_LIKE'

/* Action creator */

const clickLike = createAction(CLICK_LIKE, (boardId, like_user_list) => ({ boardId, like_user_list }))
const cancleLike = createAction(CANCEL_LIKE, (boardId, userId) => ({ boardId, userId }))

/* Initial data */
const InitialState = {
  like_list: {},
}

/* Middleware */

const clickLikeDB = (boardId, userId) => {
  return async function (dispatch, getState, { history }) {
    // 좋아요 클릭한 게시글과 유저 정보를 보내주면
    // response로 해당 게시글에 좋아요를 누른 유저 정보 받아오기 userId ?
    // dispatch(clickLike(boardId, res.data)) // 좋아요 누른 유저 배열 형태의 데이터 리덕스에 저장
  }
}

const cancleLikeDB = (boardId, userId) => {
  return async function (dispatch, getState, { history }) {
    // 좋아요 취소한 게시글과 유저 정보 보내기
    // response로 받아올 데이터는 X
    // dispatch(cancleLike(boardId, userId)) // 리덕스에 저장되어 있는 유저 리스트에서 userId 제거
  }
}

/* Reducer */

export default handleActions(
  {
    [CLICK_LIKE]: (state, action) =>
      produce(state, (draft) => {
        draft.like_list[action.payload.boardId] = action.payload.like_user_list
      }),
    [CANCEL_LIKE]: (state, action) =>
      produce(state, (draft) => {
        draft.like_list[action.payload.boardId].filter((userId) => userId !== action.payload.userId)
      }),
  },
  InitialState
)

/* Export */

const actionCreators = {
  clickLikeDB,
  clickLike,
  cancleLikeDB,
  cancleLike,
}

export { actionCreators }
