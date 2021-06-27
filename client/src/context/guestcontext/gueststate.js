import React , {useReducer} from 'react'
import GuestContext from './guestcontext.js'
import axios from 'axios'
import Guestreducer from './guestreducer.js'
import { TOGGLE_FILTER,
    SEARCH_GUEST,
    CLEAR_SEARCH ,
    ADD_GUEST,
    REMOVE_GUEST,
    UPDATE_GUEST,
    EDIT_GUEST,
    CLEAR_EDIT,
    GET_GUEST,
    GUEST_ERROR
 } from '../type.js'

export default function Gueststate(props){
    const initialState ={
        filterGuest: false,
        search : null,
        editguest : null,
        errors:null,
        guests :[
        ]
    } 
    const [state, dispatch] = useReducer(Guestreducer, initialState)

    const getGuest = async ()=>{
        try {
            const res = await axios.get('/guests')
            dispatch({
                type:GET_GUEST,
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type:GUEST_ERROR,
                payload: err.response.msg
            })
        }
    }

    const addGuest= async (guest)=> {
        const config ={
            header:{
                'Content-type':'application/json'
            }
        }
        
        try {
            const res= await axios.post('/guests', guest, config)
            dispatch({
                type: ADD_GUEST,
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type:GUEST_ERROR,
                payload: err.response.msg
            })
        }
        
    }
    const removeGuest= async (id) =>{
        try {
            await axios.delete(`/guests/${id}`)
            dispatch({
                type: REMOVE_GUEST,
                payload: id
            })
        } catch (err) {
            dispatch({
                type:GUEST_ERROR,
                payload: err.response.msg
            })
        }
        
    }
    const updateGuest = async (guest)=>{
        const config ={
            header:{
                'Content-type':'application/json'
            }
        }
        try {
            const res= await axios.put(`/guests/${guest._id}`, guest, config)
            dispatch({
                type: UPDATE_GUEST,
                payload: res.data
            })
            
        } catch (err) {
            dispatch({
                type:GUEST_ERROR,
                payload: err.response.msg
            })
            
        }
       
    }

    const toggleFilter= () => {
        dispatch({type: TOGGLE_FILTER})
    }
    const searchGuest = (guests) => {
        dispatch({type: SEARCH_GUEST,payload : guests})
    }
    const clearSearch = () => {
        dispatch({type: CLEAR_SEARCH})
    }
    const editGuest = (guest) =>{
        dispatch({
            type: EDIT_GUEST,
            payload:guest
        })
    }
    const clearEdit = () => {
        dispatch({type: CLEAR_EDIT})
    }
    

    return (
        <GuestContext.Provider
        value={{guests:state.guests, 
        filterGuest : state.filterGuest,
        editguest : state.editguest,
        editGuest,
        clearEdit,
        searchGuest,
        removeGuest,
        updateGuest,
        clearSearch,
        addGuest,
        getGuest,
        search: state.search,
        toggleFilter}}>{props.children}</GuestContext.Provider>
   )
}
