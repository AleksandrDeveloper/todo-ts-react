import {
  ReducerState,
  ActionRedcuer,
} from '../../interfaces/index';

import { FETCH_TODO_ADD, FETCH_TODO_DELETE, FETCH_TODO_ERROR, FETCH_TODO_LIST, FETCH_TODO_UPDATE } from '../types/index'

const initialState: ReducerState = {
  todo: [],
  isLoading: true,
  error: 'd'
}

function todoReducer(state: ReducerState = initialState, action: ActionRedcuer) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_TODO_ADD:
      return {

      }
    case FETCH_TODO_DELETE:
      return {

      }
    case FETCH_TODO_ERROR:
      return {

      }
    case FETCH_TODO_LIST:
      return {

      }
    case FETCH_TODO_UPDATE:
      return {

      }
    default:
      return { ...state };
  }
}