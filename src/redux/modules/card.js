import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";
import { apis } from '../../shared/api';
import { setCookie, deleteCookie, getCookie } from '../../shared/Cookie';




const LOG_IN = "LOG_IN";




const logIn = createAction(LOG_IN, (user) => ({user}));



const initialState = {  
    nickname: null,
    is_login: false,
};


//미들웨어
const addCardDB = (img, tag, location, content, size) => {
    return async function (dispatch, getState, {history}){
        const nick = localStorage.getItem('nickname')
        const token = getCookie('token')
        const addFormData = new FormData()
        console.log(nick)
        console.log(token)
        const card_info = {
            nickname: nick,
            tagname: tag,
            location: location,
            description: content,
            size: size
        }

        addFormData.append("multipartFile", img);
        addFormData.append(
            "photoBoardRequestDto", 
            new Blob([JSON.stringify(card_info)], {type: "application/json"}))
        await apis.addPost(addFormData, {
            headers: { Authorization: 
              token }
          }).then(function(response){
            console.log(response)
        }).catch((err) => {
            console.log(err.response)
        })
        
         

    };
};

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
          console.log('로그인에 문제가 발생했습니다.', err)
        })
    }
  }



export default handleActions(
    {
        
        [LOG_IN]: (state, action) =>
            produce(state, (draft) => {
                // draft.nickname = action.payload.user
            }),
        
    },
    initialState
);

const actionCreators = {
    addCardDB,
};

export { actionCreators };
