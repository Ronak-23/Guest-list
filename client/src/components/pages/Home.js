import React, {useContext, useEffect} from 'react'
import GuestsForm from "../guests/guestsform.js"
import Guestcounter from "../guests/guestcounter.js"
import Guestfilter from "../guests/guestfilter.js"
import Guestsearch from "../guests/guestsearch.js"
import Guests from "../guests/guests.js"
import AuthContext from '../../context/authContext/authcontext.js'
import GuestContext from '../../context/guestcontext/guestcontext.js'
export default function Home (){
    const {getUser} =useContext(AuthContext)
    
    useEffect(()=>{
        getUser()
        getGuest()
        // eslint-disable-next-line
    },[])
    
    return (
        <div className="app-container">
        <div className="main">
        <div className="filter">
            <Guestfilter />
            <Guestsearch />
        </div>
            <GuestsForm />
            <Guestcounter />
        </div>
            <Guests />
        </div>
    )
}
