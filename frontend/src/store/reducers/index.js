import {combineReducers} from "redux";
import {reducer as formReducer} from 'redux-form';
import auth from "./auth";
import navReducer from './nav'

export default combineReducers({
    auth,
    form:formReducer,
    fixed:navReducer
})
