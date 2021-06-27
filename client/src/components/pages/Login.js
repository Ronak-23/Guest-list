import React, {useState, useContext, useEffect} from 'react'
import {Link} from 'react-router-dom'
import AuthContext from '../../context/authContext/authcontext'

export default function Login(props) {
    const [user, setUser] = useState ({ email: '' , password :''})
    const {loginUser, userAuth, errors,clearError} = useContext(AuthContext)
    useEffect( ()=>{
        if(userAuth){
            props.history.push('/')
        }
    },[userAuth,props.history])
const handleChange = (e) =>{
    setUser({...user, [e.target.name ] : e.target.value })
    clearError()
}
const submit = (e)=>{
    e.preventDefault()
    loginUser({email,password})
    
    clearError()
}
const {email, password} = user 

    return (
        <div className="register" onSubmit={submit}>
            <h1>Sign in</h1>
            <form>
                <input type="email" value={email} name="email"  placeholder="E-mail" onChange={handleChange} / >
                <input type="password" value={password} name="password" placeholder="Password" onChange={handleChange} />
                <input type="submit" value="Sign in" className="btn"  />

            </form>
            <div className="question">
            {errors !==null && <button className="danger">
                {errors.msg ? errors.msg : errors.error[0].msg}
                <span onClick={()=> clearError()}>X</span></button> }
                <p>Don't have an account? {" "} <Link to= '/register' >Register</Link> </p>
            </div>
        </div>
    )
}
