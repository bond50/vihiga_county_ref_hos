import {REMOVE_FIXED_NAV, SET_FIXED_NAV} from "../actions/types";

const initialState = {
    fixed: false,
    active: 'home'
}

export default function navReducer (state = initialState, {type, payload}) {
    switch (type) {
        case SET_FIXED_NAV:
            return {
                ...state,
                fixed: true,
            }
        case REMOVE_FIXED_NAV:
            return {
                ...state, fixed: false
            }
        default:
            return state;
    }

}