import React, {useContext} from 'react'
import AuthContext from '../../../context/authContext/authcontext'
import { Route, Redirect } from 'react-router-dom'

export default function Privateroute ({component: Component, ...rest}) {
    const {userAuth} = useContext(AuthContext)
    return (
        <Route
        {...rest}
        render={props=>!userAuth? ( <Redirect to='/login'/>): (<Component {...props} />) }
        />
    )
}
