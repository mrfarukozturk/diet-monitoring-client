import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../contexts/UserContext'
import Icons from '../Icons'
import userRelationService from '../../services/userRelationService'

export default function DieticianInfo( { client, clientReload } ) {

  const [ dietitians, setDietitians ] = useState([])

  const getDietitians = async () => {

    //console.log("DieticianInfo" , client.id)

    const dietitianList = await userRelationService.getUsersByClientId( client.id );
    //console.log(dietitianList)
    setDietitians( dietitianList )
  }

  useEffect(() => {
    getDietitians()
  }, [client]);

	return (
		<>
			{
				dietitians?.map( (dietitian, i)=>(
					<Profile key={i} client = {client} dietitian = {dietitian} getDietitians = {getDietitians} clientReload = {clientReload}></Profile>
				))
			}
		</>
	)

	return (
		<>
			<button type="button" className="btn btn-secondary add-dietician" data-bs-toggle="modal" data-bs-target="#add-dietician">
				<Icons icon="fa-solid fa-user-plus" />
			</button>
			<div className="modal fade text-start" id="add-dietician" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">Dietician Add</h5>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
							...sss
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
							<button type="button" className="btn btn-primary">Save changes</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

function Profile( { client, dietitian, getDietitians, clientReload } ) {

	const acceptInvitation = async ()=>{
    await userRelationService.updateInvitation( dietitian.UserRelation.id, { status: "active" } )
    clientReload()
		getDietitians();
	}

	const removeInvitation = async ()=>{
    await userRelationService.updateInvitation( dietitian.UserRelation.id, { status: "passive" } )
    clientReload()
		getDietitians();
	}
	return (
		<>
			<div className="btn-group">
				<a data-bs-toggle="dropdown" aria-expanded="false">
        { dietitian.UserRelation.status === "invitation" ? <span className="position-absolute top-0 translate-middle badge rounded-pill bg-success">new</span>:<></>}
				
					<img className='user-profile-image-mini me-3' src={dietitian.profileImage ? dietitian.profileImage :"Unknown_person.jpg"}/>
				</a>
				<ul className="dropdown-menu">
					<li>
						<div className='d-flex justify-content-center align-items-center align-middle px-2 mx-2'>
							<img className='user-profile-image-mini' src={dietitian.profileImage ? dietitian.profileImage :"Unknown_person.jpg"}/>
							<div className='ms-2 me-auto text-start'>
								<h6 className='user-name'>
									{ dietitian.firstName == null ? dietitian.email : dietitian.firstName + " " + dietitian.lastName }
								</h6>
							</div>
						</div>
					</li>
					<li><hr className="dropdown-divider"/></li>
					{ dietitian.UserRelation.status === "active" ? <li><a className="dropdown-item" href="#" onClick={()=>removeInvitation()}>Remove</a></li>:<></>}
					{ dietitian.UserRelation.status === "invitation" ? <li><a className="dropdown-item" href="#" onClick={()=>acceptInvitation()}>Accept invite</a></li>:<></>}

					{ dietitian.UserRelation.status === "invitation" ? <li><a className="dropdown-item" href="#" onClick={()=>removeInvitation()}>Decline Invite</a></li>:<></>}
					
				</ul>
			</div>
		</>
	)
}