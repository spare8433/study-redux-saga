import produce from "immer"
// import { handleActions } from "redux-action"
import { LOG_IN_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS }  from "./user.types"

const initialState = {
  error:null,
  userData:{
    id : '',
    pw: ''
  }
}

export const userReducers = (state = initialState, action) => {

  switch (action.type) {
    case LOG_IN_REQUEST : 
      return produce(state, draft => {
        draft.error = null;
      })
    case LOG_IN_SUCCESS : 
      return produce(state, draft => {
        draft.error = null;
        draft.userData = action.user.userData;
      })
    case LOG_IN_FAILURE : 
      return produce(state, draft => {
        draft.error = action.error;
      })
    default :
      return state
  }

  // produce(state, draft => {
  //   switch (action.type) {
  //     case LOG_IN_REQUEST : 
  //       draft.error = null;
  //       break;
  //     case LOG_IN_SUCCESS : 
  //       draft.error = null;
  //       draft.userData = action.user.userData;
  //       break;
  //     case LOG_IN_FAILURE : 
  //       draft.error = action.error;
  //       break;
  //     default :
  //       break;
  //   }
  // })
}



//  얕은 뎁스라면 이런 방식도 가능

// export const userReducer = handleActions(
// 	{
// 		[actions.LOG_IN] : (state,action) => ({
//       ...state
//     }),
//     [actions.LOG_IN_SUCCESS] : (state,action) => ({
//       ...state
//     }),
// 	},
// 	initialState
// )