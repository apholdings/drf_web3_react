import axios from 'axios';
import {
    CREATE_USER_SUCCESS,
    CREATE_USER_FAIL,
    GET_USER_DETAILS_SUCCESS,
    GET_USER_DETAILS_FAIL,
    GET_MY_USER_DETAILS_SUCCESS,
    GET_MY_USER_DETAILS_FAIL
} from './types';

export const create_user = () => async dispatch => {

        const account = localStorage.getItem('account')

        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        };

        const formData = new FormData()
        formData.append('account', account)

        try {
            const res = await axios.post(
                `${process.env.REACT_APP_API_URL}/api/user/create`,
                formData,
                config
            );

            if (res.status === 201) {
                dispatch({
                    type: CREATE_USER_SUCCESS,
                    payload: res.data
                });
            } else {
                dispatch({
                    type: CREATE_USER_FAIL
                });
            }
        } catch(err) {
            dispatch({
                type: CREATE_USER_FAIL
            });
        }
    
};

export const get_user_details = (account) => async dispatch => {

    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    };

    const formData = new FormData()
    formData.append('account', account)

    try {
        const res = await axios.get(
            `${process.env.REACT_APP_API_URL}/api/user/profile/${account}`,
            formData,
            config
        );

        if (res.status === 200) {
            dispatch({
                type: GET_USER_DETAILS_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_USER_DETAILS_FAIL
            });
        }
    } catch(err) {
        dispatch({
            type: GET_USER_DETAILS_FAIL
        });
    }

};

export const get_my_user_details = (account) => async dispatch => {

    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    };

    const formData = new FormData()
    formData.append('account', account)

    try {
        const res = await axios.get(
            `${process.env.REACT_APP_API_URL}/api/user/profile/${account}`,
            formData,
            config
        );

        if (res.status === 200) {
            dispatch({
                type: GET_MY_USER_DETAILS_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_MY_USER_DETAILS_FAIL
            });
        }
    } catch(err) {
        dispatch({
            type: GET_MY_USER_DETAILS_FAIL
        });
    }

};