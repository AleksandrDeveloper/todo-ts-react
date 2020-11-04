import { ReducerState, ToDoItem } from './../../interfaces/index';
import { Dispatch } from 'redux'
import { ActionsType } from '../../interfaces';
import { ThunkAction } from 'redux-thunk';

const { REACT_APP_URL_DB } = process.env;

function _dispatch(
  type: ActionsType,
  payload: ToDoItem | any,
  dispatch: Dispatch) {

  dispatch({ type, payload })
}

export const getToDoList = (): ThunkAction<any, ReducerState, any, any> => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await fetch(`${REACT_APP_URL_DB}`);
      const data = await res.json()
      _dispatch('FETCH_TODO_LIST', data, dispatch)
    } catch (e) {
      console.log(e);
      _dispatch('FETCH_TODO_ERROR', e.message, dispatch)
    }
  }
}