import {
  ReducerState,
  ActionRedcuer,
  ToDoItem
} from '../../interfaces/index';

import { FETCH_TODO_ADD, FETCH_TODO_DELETE, FETCH_TODO_ERROR, FETCH_TODO_LIST, FETCH_TODO_UPDATE } from '../types/index'

const initialState: ReducerState = {
  todo: [],
  isLoading: true,
  error: 'd'
}

function todoReducer(state: ReducerState = initialState, action: ActionRedcuer): ReducerState {
  const { type, payload } = action;
  switch (type) {
    case FETCH_TODO_ADD:
      return {
        ...state,
        todo: [...state.todo, payload]
      }
    case FETCH_TODO_DELETE:
      return {
        ...state,
        todo: [...state.todo].filter((item: ToDoItem) => item.id !== payload)
      }
    case FETCH_TODO_ERROR:
      return {
        ...state,
        error: payload
      }
    case FETCH_TODO_LIST:
      return {
        ...state,
        todo: payload
      }
    case FETCH_TODO_UPDATE:
      return {
        ...state,
        todo: [...state.todo].map((item: ToDoItem): ToDoItem => {
          if (payload.id === item.id) {
            return {
              ...item,
              ...payload
            }
          }
          return item
        })
      }
    default:
      return { ...state };
  }
}

export default todoReducer;