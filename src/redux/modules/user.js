import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";



const LOG_OUT = "LOG_OUT";
const LOG_IN = "LOG_IN";
const GET_USER = "GET_USER";



const logIn = createAction(LOG_IN, (user) => ({user}));
const logOut = createAction(LOG_OUT, (user) => ({user}));
const getUser = createAction(GET_USER, (user) => ({user}));


const initialState = {  
    nickname: null,
    is_login: false,
};


//미들웨어
const loginNJ = (id, pwd) => {
    return async function (dispatch, getState, {history}){
        
        
         

    };
};


const signupNJ = (id, nickname, pwd) => {
    return async function (dispatch, getState, {history}){
        

        
    };
};


export default handleActions(
    {
        
        [LOG_IN]: (state, action) =>
            produce(state, (draft) => {
                draft.nickname = action.payload.user
            }),
        [LOG_OUT]: (state, action) =>
            produce(state, (draft) => {
                // localStorage.removeItem("nickname")
                // localStorage.removeItem("token")
            }),
        [GET_USER]: (state, action) => 
        produce(state, (draft) => {

        }),
    },
    initialState
);

const actionCreators = {
    logIn,
    
};

export { actionCreators };
