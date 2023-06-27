import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../contexts/UserContext'
import Icons from '../components/Icons'
import ClientRow from '../components/dietician/ClientRow'
import userRelationService from '../services/userRelationService'
import ClientInvitation from '../components/dietician/ClientInvitation'
import { useLocation } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb'


export default function DieticianProfile() {
  const {loginUser} = useContext(UserContext)
  let dietician = loginUser

  let location = useLocation();

  //console.log(location)
  const [ clients, setClients ] = useState({})
  const [ isInvitation, setIsInvitation ] = useState( false )

  const getClients = async () => {
    setClients( await userRelationService.getUsersByDieticianId(dietician.id) )
  }

  useEffect(() => {
    getClients()
  }, []);
  return (
    <>
        <Breadcrumb routers = {[{name: "Home", path: "dietician-profile",}]}/>
        <div className="container profile-box mt-3">
          <div className="row justify-content-md-center">
            <div className="col col-lg-4 d-flex align-items-center name-box pb-3">
              <img className='profile-image' src={dietician.profileImage ? dietician.profileImage :"Unknown_person.jpg"}></img>
              <div className='ms-2 me-auto text-start user-info'>
                <h2 className='name-surname'>{dietician && dietician.firstName} {dietician && dietician.lastName}</h2>
                <h5 className='role-name'> {dietician && dietician.role} </h5>
              </div>
            </div>
            <div className="col col-lg-8 d-flex flex-column align-self-center mt-2">
              <div className='ms-2 text-start d-flex align-items-start w-100'>
                  <div className='w-25'><b>Adress:</b></div>
                  <div className='w-75'> {dietician && dietician.adress} </div>
              </div>
              <div className='ms-2 text-start d-flex align-items-start w-100'>
                  <div className='w-25'><b>Email:</b></div>
                  <div className='w-75'> {dietician && dietician.email} </div>
              </div>

              <div className='ms-2 text-start d-flex align-items-start w-100'>
                  <div className='w-25'><b>Phone:</b></div>
                  <div className='w-75'> {dietician && dietician.mobilePhone} </div>
              </div>
              <div className='ms-2 text-start d-flex align-items-start w-100'>
                  <div className='w-25'><b>Whatsapp:</b></div>
                  <div className='w-75'> {dietician && <a target='_blank' href={`https://wa.me/${dietician.mobilePhone}`}>{dietician.mobilePhone}</a>} </div>
              </div> 
            </div>
          </div>
        </div>
        <div className="container profile-box client-list-box">
          <div className="row">
            <div className='col d-flex flex-row-reverse'>
              { isInvitation && <ClientInvitation dietician={dietician} setIsInvitation = {setIsInvitation} getClients = {getClients}></ClientInvitation>}
              { ! isInvitation && <button type="button" onClick={()=>setIsInvitation(true)} className="btn btn-primary btn-sm add-client"><Icons icon="fa-solid fa-user-plus" /> Add Client</button>}
            </div>
          </div>
          <div className="row">
            <ul className="nav nav-tabs tab-menu">
              <li className="active">
                <a data-toggle="tab" href="#"><Icons icon="fa-solid fa-people-group" /> Clients</a>
              </li>
            </ul>
          </div>
          <div className="row">
            <div className="card client-list">
              <div className="card-header">
              <Icons icon="fa-solid fa-people-group" /> Clients
              </div>
              <div className="card-body">
                <table className="table client-list-table">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Name</th>
                      <th scope="col">Status</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                  { clients.length > 0 ? clients.map(( client ) => (
                      <ClientRow key={ client.id } client = {client} getClients = {getClients} />
                    )):<></>
                  }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}