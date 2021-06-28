import React, {useContext} from 'react'
import GuestContext from '../../context/guestcontext/guestcontext.js'
import Guest from './guest.js'

export default function Guests() {
    const {guests, filterGuest, search} = useContext(GuestContext)
    
    return (
        
        <div className="guests">
            {search!==null ? Object.values(search).filter(guest => !filterGuest || guest.isconfirmed).map(guest=> <Guest key={guest._id} guest={guest}/>):
            guests.length!==0 ? Object.values(guests).filter(guest => !filterGuest || guest.isconfirmed).map(guest=> <Guest key={guest._id} guest={guest}/>):null}
        </div>
    )
}
