import React, {useContext} from 'react'
import GuestContext from '../../context/guestcontext/guestcontext'

export default function Guest ({guest}) {
    const {_id, name,phone, dietary, isconfirmed  } = guest
    const {updateGuest, removeGuest, editGuest} = useContext(GuestContext)
    const handleClick = () =>{
        removeGuest(_id)
    }
    const handleCheck = () =>{
        updateGuest({...guest, isconfirmed: !isconfirmed})
    }

    return (
        <div className="guest-card">
            <div className="card-head">
                <div>
                    <label className={`${isconfirmed && 'confirm'}`} >Confirmed
                        <i className={`fas fa-check-square ${isconfirmed && 'confirm'}`}  />
                        <input type="checkbox" onChange={handleCheck}/>
                    </label>

                </div>
                <div>
                    <button onClick= {()=> editGuest(guest)} >
                        <i className="fas fa-user-edit" />
                    </button>
                    <button onClick={handleClick} >
                        <i className="fas fa-trash-alt remove" />
                    </button>
                </div>
                </div>
            
        
                <div className="card-body">
                    <h2>{name}</h2>
                    <span className={"badge " + (dietary==="Non-veg" ? 'red': dietary==="Vegan" ? 'green' : 'seaGreen' ) }>{dietary}</span>
                    <div className="contact">
                        <i className="fas fa-phone-alt"></i>
                        <p> {phone} </p>
                    </div>
                </div>

        </div>
    )
}
