import React, {useState, useContext, useEffect} from 'react'
import {Link} from 'react-router-dom'
import AuthContext from '../../context/authContext/authcontext'

export default function Register(props) {
const [user, setUser] = useState ({ name:'' , email: '' , password :'', password2 : '' })
const {registerUser, userAuth, errors, setError, clearError} = useContext(AuthContext)

useEffect( (props)=>{
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
    if(password !== password2)
    {
        setError( {msg:'pwd dont match'})
    }else{
        registerUser({name,email,password})
        clearError()
    }
}

const {name, email, password, password2} = user 
    return (
        <div className="register">
            <h1>Sign up</h1>
            <form onSubmit={submit}>
                <input type="text" name="name" value={name} placeholder="Name" onChange={handleChange} />
                <input type="email" name="email" value={email} placeholder="E-mail" onChange={handleChange}/>
                <input type="password" name="password" value={password} placeholder="Password" onChange={handleChange}/>
                <input type="password" name="password2" value={password2} placeholder="Confirm Password" onChange={handleChange} />
                <input type="submit" value="Sign up" className="btn" />

            </form>
            <div className="question">
                {errors !==null && <button className="danger">
                {errors.msg ? errors.msg : errors.error[0].msg}
                <span onClick={()=> clearError()}>X</span></button> } 
                <p>Already have an account? {" "} <Link to= '/login' >Login</Link> </p>
            </div>
        </div>
    )
}
