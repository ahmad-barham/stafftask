import {
  GET_DATA_FAILED,
    GAET_DATA_SUCCESS,
    GET_DATE
} from '../actions/types';

const INITIAL_STATE = { loading: false, error: '', saved: false }

export default(state = INITIAL_STATE, action) => {
  switch(action.type) {
    case GET_DATE:
      return { ...INITIAL_STATE, loading: true  }
    case GAET_DATA_SUCCESS:
      return { ...INITIAL_STATE, loading: false, getdatadate: action.data.date,getdatatime:action.data.time }
    case GET_DATA_FAILED:
      return { ...INITIAL_STATE, loading: false, error: action.error }
    default:
      return state;
  }
}
