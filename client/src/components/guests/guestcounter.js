import React, {useContext} from 'react'
import GuestContext from '../../context/guestcontext/guestcontext'


export default function Guestcounter() {
  const {guests} = useContext(GuestContext)
  const totalInvited = guests.length
  const attending = guests.filter(guest=> guest.isconfirmed=== true)
  const TotalAttending = attending.length
  function totalbydiet(type)
  {
    return(guests.filter(guest=> guest.dietary=== type))
  }
  function attendingbydiet(type)
  {
    return(attending.filter(guest=> guest.dietary=== type))
  }
    return (
        <div>
            <table>
        <tbody>
          <tr>
            <th>Guest</th>
            <th>Invited</th>
            <th>Attending</th>
          </tr>
          <tr>
            <th>Non-Veg</th>
            <td>{totalbydiet('Non-veg').length}</td>
            <td>{attendingbydiet('Non-veg').length}</td>
          </tr>
          <tr>
            <th>Vegan</th>
            <td>{totalbydiet('Vegan').length}</td>
            <td>{attendingbydiet('Vegan').length}</td>
          </tr><tr>
            <th>Other</th>
            <td>{totalbydiet('Other').length}</td>
            <td>{attendingbydiet('Other').length}</td>
          </tr>
          <tr>
            <th>Total</th>
            <td>{totalInvited}</td>
            <td>{TotalAttending}</td>
          </tr>
        </tbody>
      </table>
        </div>
    )
}
