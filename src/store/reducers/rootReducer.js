import { combineReducers } from 'redux';
import { filterReducer } from "../reducers/filterReducer";
import { todosReducer } from "../reducers/todosReducer";

export const rootReducer = combineReducers(
    {
        // nombre del estado  : reducer que lo va a controlar
        todosState: todosReducer,
        filterState: filterReducer,
        // ... agregar mas estados y reducers que se incluyan en el store
    }
)