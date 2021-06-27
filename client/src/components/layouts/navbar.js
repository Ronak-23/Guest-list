import React,{Fragment, useContext} from 'react'
import {Link} from 'react-router-dom'
import AuthContext from '../../context/authContext/authcontext'

export default function Navbar(){
    const {logoutUser, clearError, userAuth, user} = useContext(AuthContext)
    const handleClick= ()=>{
        logoutUser()
        clearError()
    }
    const userLinks =(
        <Fragment>
             <li>Hello, {user && user.name}</li>
            <span className="sm-hide">|</span>
            <li>
                <a href="#!">
                    <span className="sm-hide" onClick={handleClick}>Logout</span>
                    <i className="fas fa-sign-out-alt"></i>
                </a>
            </li>
        </Fragment>
    )

    const authLinks= (
        <Fragment>
        <li>
            <Link to='/register'>Register</Link>
        </li>
        <span className="sm-hide">|</span>
        <li>
            <Link to='/login'>Login</Link>
        </li>
        </Fragment>
    )

    return (
        <div className="navbar">
        <div className="logo">
            <h1>
                <i className="fas fa-glass-cheers" />
                Guest list
            </h1>
            <p>Made by Ronak Mohata</p>
        </div>
        <ul>
           {userAuth? userLinks : authLinks}
        </ul>
            
        </div>
    )
}
