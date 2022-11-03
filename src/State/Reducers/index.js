import loggedReducer from "./IsLogged";
import exempleReducer from "./exemple";
import {combineReducers} from 'redux'
//in case we have multiple reducers we have to use combineReducers from redux 
//for exemple 

const allReducers = combineReducers({
    isLogged : loggedReducer,
    exemple : exempleReducer
})

export default allReducers
