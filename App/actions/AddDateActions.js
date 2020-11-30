import {
  ADDING_FAILED,
  ADDING_SUCCESS,
  ADDING_DATE


} from './types';
import{getData,updateDate,updatetime} from"../api/api";



const handleResponse = (dispatch, data ) => {

  if (data) {
    dispatch({ type: ADDING_SUCCESS ,data})
  }else{
    dispatch({ type: ADDING_FAILED, error: data })
  }
}

export const addDate = (uid,user,...data) => {
  return (dispatch) => {
    dispatch({ type: ADDING_DATE  });
updateDate(uid,user,data).then(resp => { handleResponse(dispatch, resp);})
.catch(error => console.log(error));
    //Get Token from local storage

  }
}
export const addTime = (uid,user,...time) => {
  return (dispatch) => {
    dispatch({ type: ADDING_DATE  });
updatetime(uid,user,time).then(resp => { handleResponse(dispatch, resp);})
.catch(error => console.log(error));
    //Get Token from local storage

  }
}
