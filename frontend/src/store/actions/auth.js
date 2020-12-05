import {LOGIN_FAIL, LOGIN_SUCCESS, USER_LOADED_FAIL, USER_LOADED_SUCCESS} from "./types";
import axios from 'axios';

export const loadUser = () => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        }

        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/auth/users/me/`, config)
            dispatch(
                {
                    type: USER_LOADED_SUCCESS,
                    payload: response.data
                }
            )
        } catch (error) {
            dispatch(
                {
                    type: USER_LOADED_FAIL
                }
            )

        }

    } else {
        dispatch(
            {
                type: USER_LOADED_FAIL
            }
        )
    }

}
export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({email, password})

    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/jwt/create/`, body, config)
        dispatch(
            {
                type: LOGIN_SUCCESS,
                payload: response.data
            }
        );
        dispatch(loadUser())
    } catch (error) {
        dispatch(
            {
                type: LOGIN_FAIL
            }
        )

    }


}