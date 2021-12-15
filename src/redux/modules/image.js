import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";




const LOG_IN = "LOG_IN";




const imageUpload = createAction(LOG_IN, (user) => ({user}));



const initialState = {  
    nickname: null,
    is_login: false,
};


//미들웨어
const loginNJ = (id, pwd) => {
    return async function (dispatch, getState, {history}){
        
        
         

    };
};




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
   imageUpload,
};

export { actionCreators };
