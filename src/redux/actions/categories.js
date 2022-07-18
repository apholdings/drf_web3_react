import axios from 'axios';
import {
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAIL,
    GET_PRIMARY_CATEGORIES_SUCCESS,
    GET_PRIMARY_CATEGORIES_FAIL,
    GET_CATEGORY_COURSES_SUCCESS,
    GET_CATEGORY_COURSES_FAIL,
    GET_PRODUCT_CATEGORIES_SUCCESS,
    GET_PRODUCT_CATEGORIES_FAIL,
    GET_GAMES_CATEGORIES_SUCCESS,
    GET_GAMES_CATEGORIES_FAIL,
    GET_VIDEO_CATEGORIES_SUCCESS,
    GET_VIDEO_CATEGORIES_FAIL,
    GET_BLOG_CATEGORIES_SUCCESS,
    GET_BLOG_CATEGORIES_FAIL,
    GET_CLASSROOM_CATEGORIES_SUCCESS,
    GET_CLASSROOM_CATEGORIES_FAIL
} from './types';

export const get_categories = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/category/categories`, config);

        if (res.status === 200) {
            dispatch({
                type: GET_CATEGORIES_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_CATEGORIES_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: GET_CATEGORIES_FAIL
        });
    }
};


export const get_blog_categories = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/category/blog_categories`, config);

        if (res.status === 200) {
            dispatch({
                type: GET_BLOG_CATEGORIES_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_BLOG_CATEGORIES_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: GET_BLOG_CATEGORIES_FAIL
        });
    }
};

export const get_product_categories = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/category/product_categories`, config);

        if (res.status === 200) {
            dispatch({
                type: GET_PRODUCT_CATEGORIES_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_PRODUCT_CATEGORIES_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: GET_PRODUCT_CATEGORIES_FAIL
        });
    }
};
export const get_classroom_categories = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/category/classroom_categories`, config);

        if (res.status === 200) {
            dispatch({
                type: GET_CLASSROOM_CATEGORIES_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_CLASSROOM_CATEGORIES_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: GET_CLASSROOM_CATEGORIES_FAIL
        });
    }
};

export const get_primary_categories = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/category/primary_categories`, config);

        if (res.status === 200) {
            dispatch({
                type: GET_PRIMARY_CATEGORIES_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_PRIMARY_CATEGORIES_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: GET_PRIMARY_CATEGORIES_FAIL
        });
    }
};


export const get_game_categories = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/category/game_categories`, config);

        if (res.status === 200) {
            dispatch({
                type: GET_GAMES_CATEGORIES_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_GAMES_CATEGORIES_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: GET_GAMES_CATEGORIES_FAIL
        });
    }
};