import React,{useReducer} from 'react';
import axios from 'axios'
import AuthContext from './authcontext';
import authReducer from './authreducer'
import { SUCCESS_REG, SUCCESS_LOGIN, FAIL_REG, FAIL_LOGIN, SET_ERROR , CLEAR_ERROR, LOG_OUT,SET_USER,AUTH_ERROR} from '../type';
import setToken from '../../utils/setToken';


const AuthState= (props) =>{
    const initialState={
        user:null,
        userAuth:null,
        errors:null
    }
    const [state,dispatch]= useReducer(authReducer,initialState)

    const getUser = async()=>{
        if(localStorage.token){
            setToken(localStorage.token)
          }
          
        try {
            const res= await axios.get('/auth')
            dispatch({
                type:SET_USER,
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type:AUTH_ERROR,
                payload: err
            })
        }
          
    }

    const registerUser = async userData =>{
        const config ={
            header:{
                'Content-type':'application/json'
            }
        }
        try {
            const res= await axios.post('./register', userData, config)
            dispatch({
                type: SUCCESS_REG,
                payload : res.data
            })
    
        } catch (err) {
            dispatch({
                type:FAIL_REG,
                payload: err.response.data
            })
            
        }
    
    }
    const setError =(err)=>{
        dispatch({
            type:SET_ERROR,
            payload:err
        })
    }
    
    const clearError =()=>{
        dispatch({
            type:CLEAR_ERROR
        })
    }
    
    const loginUser = async userData =>{
        const config ={
            header:{
                'Content-type':'application/json'
            }
        }
        try {
            const res= await axios.post('./auth', userData, config)
            dispatch({
                type: SUCCESS_LOGIN,
                payload : res.data
            })
    
        } catch (err) {
            dispatch({
                type:FAIL_LOGIN,
                payload: err.response.data
            })
            
        }
    
    }

    const logoutUser = () =>{
        dispatch({
            type:LOG_OUT
        })
    }
    
    return(
        <AuthContext.Provider value={{
            user:state.user,
            userAuth: state.userAuth,
            errors: state.errors,
            getUser,
            registerUser,
            loginUser,
            logoutUser,
            setError,
            clearError
        }} >{props.children}</AuthContext.Provider>
    )
}






export default AuthState