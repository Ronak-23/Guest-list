import { TOGGLE_FILTER,SEARCH_GUEST,
    ADD_GUEST,
    REMOVE_GUEST ,
    UPDATE_GUEST,
    EDIT_GUEST,
    CLEAR_EDIT,
    GET_GUEST,
    GUEST_ERROR,
    CLEAR_SEARCH} from '../type.js'

const guestReducer= ( state , {type,payload} ) => {
    switch(type){
        case GET_GUEST:
            return{
                ...state,
                guests:payload
            }
        case EDIT_GUEST:
            return{
                ...state,
                editguest: payload
            }
        case CLEAR_EDIT:
            return{
                ...state,
                editguest:null
            }
        case UPDATE_GUEST:
            return{
                ...state,
                guests : state.guests.map(guest=>guest._id===payload._id? payload :guest)
            }
        case REMOVE_GUEST :
            return{
                ...state,
                guests : state.guests.filter(guest => guest._id !==payload)
            }
        case ADD_GUEST:
            return{
                ...state,
                guests : [...state.guests, payload]
            }
        case TOGGLE_FILTER:
            return{
                ...state,
                filterGuest : !state.filterGuest 
            }
        case SEARCH_GUEST:
            const reg = new RegExp(`${payload}`,'gi')
            return{
                ...state,
                search : state.guests.filter(guest => guest.name.match(reg))
            }
        case CLEAR_SEARCH:
            return{
                ...state,
                search: null
            }
        case GUEST_ERROR:
            return{
                ...state,
                guests:[],
                errors:payload
            }
        default:
            return state
        }
        
}

export default guestReducer