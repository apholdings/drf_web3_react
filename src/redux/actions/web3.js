import {
    LOAD_WEB3_SUCCESS,
    LOAD_WEB3_FAIL,
    LOAD_BLOCKCHAIN_DATA_SUCCESS,
    LOAD_BLOCKCHAIN_DATA_FAIL,
    // LOAD_TETHER_SUCCESS,
    // LOAD_TETHER_FAIL,
    // LOAD_TETHER_BALANCE_SUCCESS,
    // LOAD_TETHER_BALANCE_FAIL,
    // LOAD_URIDIUM_SUCCESS,
    // LOAD_URIDIUM_FAIL,
    // LOAD_URIDIUM_BALANCE_SUCCESS,
    // LOAD_URIDIUM_BALANCE_FAIL,
    // LOAD_BANK_SUCCESS,
    // LOAD_BANK_FAIL,
    // LOAD_BANK_BALANCE_SUCCESS,
    // LOAD_BANK_BALANCE_FAIL,
    // SET_LOADING_SUCCESS,
    SET_LOADING_FAIL,
    // LOAD_ETHEREUM_SUCCESS,
    // LOAD_ETHEREUM_FAIL,
    // LOAD_ETHEREUM_BALANCE_SUCCESS,
    // LOAD_ETHEREUM_BALANCE_FAIL,
    // LOAD_TETHER_SUCCESS,
    // LOAD_TETHER_FAIL,
    // LOAD_TETHER_BALANCE_SUCCESS,
    // LOAD_TETHER_BALANCE_FAIL,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAIL,
    LOAD_NETWORK_SUCCESS,
    LOAD_NETWORK_FAIL,
    // LOAD_ETHSWAP_SUCCESS,
    // LOAD_ETHSWAP_FAIL,
    // LOAD_ETHSWAP_BUY_SUCCESS,
    // LOAD_ETHSWAP_BUY_FAIL,
    // LOAD_CREDITS_SUCCESS,
    // LOAD_CREDITS_FAIL,
    // LOAD_CREDITS_BALANCE_SUCCESS,
    // LOAD_CREDITS_BALANCE_FAIL,
} from './types'
import { setAlert } from './alert';
import Web3 from "web3/dist/web3.min";
import axios from "axios"

// import Token from 'contract_abis/Token.json'
// import Credits from 'contract_abis/Credits.json'


    export const loadEthereumWallet = () => async dispatch => {

        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        };
        

        if(window.ethereum) {
    
            dispatch({
                type: LOAD_WEB3_SUCCESS,
            })

            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const account = accounts[0];
            
            dispatch({
                type: LOAD_BLOCKCHAIN_DATA_SUCCESS,
                payload:account
            })

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
            
            localStorage.setItem('account', accounts[0]);
            setTimeout(window.location.href="/",4000)

        } else {
            dispatch({
                type: LOAD_WEB3_FAIL,
            })
            dispatch(setAlert('Debes instalar una billetera web3 primero.', 'rose'));
        }
    }

    export const setEthereumWallet = () => async dispatch => {
        if(window.ethereum) {
            window.web3 = new Web3(window.ethereum)
            
            dispatch({
                type: LOAD_WEB3_SUCCESS,
            })

            const web3 = window.web3
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const account = accounts[0];
            
            dispatch({
                type: LOAD_BLOCKCHAIN_DATA_SUCCESS,
                payload:accounts[0]
            })
            
            localStorage.setItem('account', account);
        } else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider)
            dispatch({
                type: LOAD_WEB3_SUCCESS,
            })

            
            const web3 = window.web3
            const accounts = await web3.eth.getAccounts()
            
            dispatch({
                type: LOAD_BLOCKCHAIN_DATA_SUCCESS,
                payload:accounts[0]
            })
            
            localStorage.setItem('account', accounts[0]);
            
        } else {
            dispatch({
                type: LOAD_WEB3_FAIL,
            })
        }
    }

    export const loadBlockchainData = () => async dispatch => {
        if(window.web3){

            const web3 = window.web3
            const accounts = await web3.eth.getAccounts()
    
            dispatch({
                type: LOAD_BLOCKCHAIN_DATA_SUCCESS,
                payload:accounts[0]
            })
    
        }else {
            dispatch({
                type: LOAD_BLOCKCHAIN_DATA_FAIL,
            })
            dispatch({
                type: SET_LOADING_FAIL,
                payload:false
            })
        }
    }


    export const get_network_id = () => async dispatch => {
        if(window.ethereum){
            const netId = await window.ethereum.request({ method: 'eth_chainId' })
    
            dispatch({
                type: LOAD_NETWORK_SUCCESS,
                payload:netId
            })
        }else{
            dispatch({
                type: LOAD_NETWORK_FAIL,
                payload:false
            })
        }
    }