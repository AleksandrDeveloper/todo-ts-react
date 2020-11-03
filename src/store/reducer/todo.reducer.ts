import * as IntefaceReducer  from '../../interfaces/index';

const initialState : IntefaceReducer.ReducerState = {
  todo:[],
  isLoading:true,
  error:'d'
} 

function todoReducer(state :IntefaceReducer.ReducerState = initialState,action :IntefaceReducer.ActionRedcuer){
  const {type,payload} = action;
}