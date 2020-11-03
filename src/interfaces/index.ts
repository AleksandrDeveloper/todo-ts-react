export type StstusItem = 'TODO' | 'COMPLETED' | 'PROCESS';

export type ActionsType = 'FETCH_TODO_LIST'|'FETCH_TODO_UPDATE'|'FETCH_TODO_ADD'|'FETCH_TODO_DELETE'|'FETCH_TODO_ERROR';

export interface ToDoItem {
  id:number
  title:string
  description?:string
  dueDate?:Date
  status?:StstusItem
};

export interface ReducerState {
  todo:ToDoItem[]
  isLoading:boolean
  error:string | null
};

export interface ActionRedcuer {
  type:ActionsType
  payload:any
}