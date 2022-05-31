// import { createAction } from "redux-action"
import { LOG_IN_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_OUT } from "./user.types"


// export const logInRequest = createAction(LOG_IN_REQUEST,req=>({req:req}) )
// export const logInSuccess = createAction(LOG_IN_SUCCESS,itmes=>({user:itmes}) )
// export const logInFailure = createAction(LOG_IN_FAILURE,itmes=>({errot:itmes}) )
// export const logOut = createAction(LOG_OUT,itmes=>({user:itmes}) )

export const logInRequest = (req) => ({
  type: LOG_IN_REQUEST,
  req:req
})

export const logInSuccess = (user) => ({
  type: LOG_IN_SUCCESS,
  user:user
})

export const logInFailure = (error) => ({
  type: LOG_IN_FAILURE,
  error:error
})