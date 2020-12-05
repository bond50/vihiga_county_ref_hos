import {REMOVE_FIXED_NAV, SET_FIXED_NAV} from "./types";

export const setFixedNav = () => dispatch => dispatch({type: SET_FIXED_NAV});
export const removeFixedNav = () => dispatch => dispatch({type: REMOVE_FIXED_NAV});