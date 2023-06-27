import React from 'react'
import { NavLink } from 'react-router-dom'
import Icons from '../Icons'
import userRelationService from '../../services/userRelationService'


export default function ClientRow( { client, getClients } ) {

	const removeClient = async ()=>{
    await userRelationService.updateInvitation( client.UserRelation.id, { status: "passive" } )
		getClients();
	}

  return (
    <tr>
      <td><img className='client-profile-image' src={client.profileImage ? client.profileImage :"Unknown_person.jpg"}></img></td>
      <td>
        <NavLink className="nav-link" to={ `../client-profile/${client.id}` }>{ client.firstName == null ? client.email : client.firstName }</NavLink>
      </td>
      <td>
        {(client.UserRelation.status == 'invitation') ? <span className="badge rounded-pill bg-warning text-dark">Pending</span> :<></>}
         { (client.UserRelation.status == 'active') ? <span className="badge rounded-pill bg-success">Active</span> :<></>}
         { (client.UserRelation.status == 'passive') ? <span className="badge rounded-pill bg-secondary">Removed</span> :<></>}
      </td>
      <td>
        <a className="dropdown-item" onClick={()=>{removeClient()}} href="#"><Icons icon="fa-solid fa-trash-can" /> Remove</a>        
      </td>
    </tr>
  )
}