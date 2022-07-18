import {
    LOAD_WEB3_SUCCESS,
    LOAD_WEB3_FAIL,
    LOAD_BLOCKCHAIN_DATA_SUCCESS,
    LOAD_BLOCKCHAIN_DATA_FAIL,
    // LOAD_TETHER_FAIL,
    // LOAD_TETHER_SUCCESS,
    // LOAD_TETHER_BALANCE_SUCCESS,
    // LOAD_TETHER_BALANCE_FAIL,
    LOAD_URIDIUM_FAIL,
    LOAD_URIDIUM_SUCCESS,
    LOAD_URIDIUM_BALANCE_SUCCESS,
    LOAD_URIDIUM_BALANCE_FAIL,
    LOAD_BANK_SUCCESS,
    LOAD_BANK_FAIL,
    LOAD_BANK_BALANCE_SUCCESS,
    LOAD_BANK_BALANCE_FAIL,
    SET_LOADING_SUCCESS,
    SET_LOADING_FAIL,
    LOAD_ETHEREUM_BALANCE_SUCCESS,
    LOAD_TETHER_SUCCESS,
    LOAD_TETHER_FAIL,
    LOAD_TETHER_BALANCE_SUCCESS,
    LOAD_TETHER_BALANCE_FAIL,
    LOAD_NETWORK_SUCCESS,
    LOAD_NETWORK_FAIL
} from '../actions/types'

const initialState = {
    account: null,
    web3: null,
    network: null,
   
}

export default function web3(state = initialState, action) {
    const { type, payload } = action;

    switch(type){
        case LOAD_BLOCKCHAIN_DATA_SUCCESS:
            return {
                ...state,
                account: payload
            }
        case LOAD_WEB3_SUCCESS:
            return {
                ...state,
                web3: payload
            }
        case LOAD_NETWORK_SUCCESS:
            return {
                ...state,
                network: payload
            }
        case LOAD_NETWORK_FAIL:
            return {
                ...state,
                network: null
            }
        case LOAD_WEB3_FAIL:
            return {
                ...state,
                web3: null
            }
        case LOAD_BLOCKCHAIN_DATA_FAIL:
            return {
                ...state,
                account: null
            }
        default:
            return state
    }
}