import {
  LOGIN_ATTEMPT,
  LOGIN_SUCCESS,
  LOGIN_FAILED
} from './types';

import{loginApi} from"../api/api";


const onLoginSuccess = (dispatch, data) => {
  console.log("sucssess register"+JSON.stringify(data))


      dispatch({ type: LOGIN_SUCCESS, data })

};

const onLoginFailed = (dispatch, errorMessage) => {
  dispatch({ type: LOGIN_FAILED, error: errorMessage})
};


export const loginUser = ( email, password ) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_ATTEMPT });
  loginApi(email, password).then(resp => onLoginSuccess(dispatch, resp)).catch (e =>
    {
  onLoginFailed(dispatch, "wrong email or password")}
    )    //Call the back-end API
    //Please do not spam/abuse it so others can use it as well.

  };
}
