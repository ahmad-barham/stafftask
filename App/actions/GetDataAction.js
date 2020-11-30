import {
GET_DATA_FAILED,
  GAET_DATA_SUCCESS,
  GET_DATE
} from './types';
import{setData,getData} from"../api/api";



const handleResponse = (dispatch, data ) => {

  if (data) {
  //  console.log("getdata"+JSON.stringify(data.date));
    dispatch({ type: GAET_DATA_SUCCESS ,data})
  }else{
    dispatch({ type: GET_DATA_FAILED, error: data })
  }
}


export const getDataAction = (id) => {
  return (dispatch) => {
    dispatch({ type: GET_DATE  });
  //  console.log("uid"+JSON.stringify("uidget"+uid));

getData(id).on('value', snapshot => { handleResponse(dispatch, snapshot.val());})

    //Get Token from local storage

  }
}
