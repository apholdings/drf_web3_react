import axios from 'axios';
import {
    GET_BLOG_LIST_SUCCESS,
    GET_BLOG_LIST_FAIL,
    GET_BLOG_FEATURED_LIST_SUCCESS,
    GET_BLOG_FEATURED_LIST_FAIL,
    GET_BLOG_SUCCESS,
    GET_BLOG_FAIL,
    GET_BLOG_PAGINATION_COUNT_SUCCESS,
    GET_BLOG_PAGINATION_COUNT_FAIL,
    GET_BLOG_PAGINATION_NEXT_SUCCESS,
    GET_BLOG_PAGINATION_NEXT_FAIL,
    GET_BLOG_PAGINATION_PREVIOUS_SUCCESS,
    GET_BLOG_PAGINATION_PREVIOUS_FAIL,
    GET_BLOG_PAGINATION_RESULTS_SUCCESS,
    GET_BLOG_PAGINATION_RESULTS_FAIL,
} from './types';


export const get_blog_list = () => async dispatch => {
    
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/`, config);

        if (res.status === 200) {
            dispatch({
                type: GET_BLOG_PAGINATION_RESULTS_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_BLOG_PAGINATION_RESULTS_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: GET_BLOG_PAGINATION_RESULTS_FAIL
        });
    }
};

export const get_blog_list_page = (p) => async dispatch => {
    
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/?p=${p}`, config);

        if (res.status === 200) {
            dispatch({
                type: GET_BLOG_PAGINATION_RESULTS_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_BLOG_PAGINATION_RESULTS_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: GET_BLOG_PAGINATION_RESULTS_FAIL
        });
    }
};

export const get_blog = (slug) => async dispatch => {

    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/${slug}/`, config);

        if (res.status === 200) {
            dispatch({
                type: GET_BLOG_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_BLOG_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: GET_BLOG_FAIL
        });
    }
};