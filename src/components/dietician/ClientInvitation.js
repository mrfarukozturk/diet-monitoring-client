import React, { useContext, useEffect, useState } from 'react'
import userRelationService from '../../services/userRelationService';


export default function ClientInvitation( {  dietician, setIsInvitation, getClients } ) {

const [ email, setEmail ] = useState();

const createInvitationToClient = async () => {

  //console.log(email)
  try {
    await userRelationService.createInvitationToClient({ email, dieticianId: dietician.id });
    setEmail( "" );
    setIsInvitation(false);
    getClients();
  } catch (error) {
    console.log(error);
  }
}

  return (
    <>
      <div className="row g-3">

        <div className="col-auto">
          <input type="text" className="form-control invitation-input" onChange={( e )=>setEmail( e.target.value )} id="inputPassword2"/>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3 classic-button" onClick={()=>createInvitationToClient()}>Invite</button>
        </div>
        <div className="col-auto">
          <button type="submit" onClick={()=>setIsInvitation(false)} className="btn btn-primary mb-3 classic-cancel-button">
            Cancel
          </button>
        </div>

      </div>
    
    </>
  )
}
