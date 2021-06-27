import React, {useState, useContext, useEffect} from 'react'
import GuestContext from '../../context/guestcontext/guestcontext'

export default function GuestsForm () {

    const {addGuest, editguest, updateGuest, clearEdit} = useContext(GuestContext)
    useEffect(()=>{
        if(editguest !==null){
            setGuest(editguest)
        }else{
            setGuest(
                {
                    name: '',
                    phone :'',
                    dietary : 'Vegan'
                }
            )
        }
    },[editguest])
    const [guest, setGuest] = useState({
        name: '',
        phone :'',
        dietary : 'Vegan'
    })
    
    const {name ,phone, dietary} = guest

    const handleChange = (e) =>{
        setGuest({
            ...guest,
            [e.target.name]:e.target.value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if(editguest!== null){
            updateGuest(guest)
            clearEdit()
        }else{
            addGuest(guest)
            setGuest(
                {
                    name: '',
                    phone :'',
                    dietary : 'Vegan'
                }
            )
        }
    }

    return (
        <div className="invite-section">
        <h1>{editguest!==null ? 'Edit Guest' : 'Invite Someone'}</h1>
        <form onSubmit={onSubmit} action="">
            <input type="text" placeholder="Name" name="name" value={name} onChange={handleChange}/>
            <input type="text" placeholder="Phone" name="phone" value={phone} onChange={handleChange}/>
            <p className="options-label">Dietary</p>
            <div className="options">
                <label className="container">
                    Non-veg
                    <input type="radio" value="Non-veg" name="dietary" checked={dietary==='Non-veg'} onChange={handleChange}/>
                    <span className="checkmark"></span>
                </label>
                <label className="container">
                    Veg
                    <input type="radio" value="Vegan" name="dietary" checked={dietary==='Vegan'} onChange={handleChange} />
                    <span className="checkmark"></span>
                </label>
                <label className="container">
                    Other
                    <input type="radio" value="Other" name="dietary" checked={dietary==='Other'} onChange={handleChange}/>
                    <span className="checkmark"></span>
                </label>
            </div>
            <input type="submit" value={editguest!==null ? 'Edit Guest' : 'Add Guest'} className="btn" />
            {editguest !==null ? <input type="button" className="btn clear" onClick ={clearEdit} value="Cancel" /> :null }
        </form>        
            
        </div>
    )
}
