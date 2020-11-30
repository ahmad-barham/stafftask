import {
  ADDING_FAILED,
  ADDING_SUCCESS,
  ADDING_DATE
} from '../actions/types';

const INITIAL_STATE = { loading: false, error: '', saved: false }

export default(state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ADDING_DATE:
      return { ...INITIAL_STATE, loading: true  }
    case ADDING_SUCCESS:
      return { ...INITIAL_STATE, loading: false, saved: true ,data: action.data }
    case ADDING_FAILED:
      return { ...INITIAL_STATE, loading: false, error: action.error }
    default:
      return state;
  }
}
