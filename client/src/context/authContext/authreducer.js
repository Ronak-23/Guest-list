import { SUCCESS_REG, SUCCESS_LOGIN, FAIL_REG, FAIL_LOGIN ,SET_ERROR, CLEAR_ERROR, LOG_OUT, SET_USER,AUTH_ERROR} from '../type';

const authReducer= (state, action)=>{
    switch(action.type){
        case SET_USER:
            return{
                ...state,
                user: action.payload,
                userAuth:true,
                errors:null
            }
        case SUCCESS_REG:
        case SUCCESS_LOGIN:
            localStorage.setItem('token', action.payload.token)
            return{
                ...state,
                userAuth:true,
                errors:null
            }
        case FAIL_LOGIN:
        case FAIL_REG:
        case LOG_OUT:
        case AUTH_ERROR:
            localStorage.removeItem('token')
            return{
                ...state,
                userAuth: null,
                errors : action.payload
            }
            case SET_ERROR:
                return{
                    ...state,
                    errors:action.payload
                }
        case CLEAR_ERROR:
            return{
                ...state,
                errors:null
            }
        default:
            return state
    }
}
export default authReducer