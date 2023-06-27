import React, { useContext, useState } from 'react'
import { UserContext } from '../contexts/UserContext'

import Icons from '../components/Icons'
import { NavLink, Outlet, useParams } from 'react-router-dom'
import DieticianInfo from '../components/client/DieticianInfo'
import Can from '../components/permissions/Can'
import Breadcrumb from '../components/Breadcrumb'

export default function ClientProfile({ client, parentPath, clientReload, routers }) {
  const {loginUser} = useContext(UserContext)






  const [ path, setPath ] = useState(parentPath)




  return (
    <>
      <Can capability="client_page" todo="client_page_access">
      <Breadcrumb routers = {routers}/>

        <div className="container client-profile-box mt-3">
          <div className="row justify-content-md-center">
            <div className="col col-lg-4 d-flex align-items-center name-box pb-3">
              <img className='profile-image' src={client.profileImage ? client.profileImage :"Unknown_person.jpg"}></img>
              <div className='ms-2 me-auto text-start user-info'>
                <h3 className='name-surname'>{client && client.firstName} {client && client.lastName}</h3>
                <h5 className='role-name'> {client && client.role} </h5>
              </div>
            </div>
            <div className="col col-lg-8 d-flex flex-column align-self-center mt-2">
              <div className='ms-2 text-start d-flex align-items-start w-100'>
                  <div className='w-25'><b>Email:</b></div>
                  <div className='w-75'> {client && client.email} </div>
              </div>
              <div className='ms-2 text-start d-flex align-items-start w-100'>
                  <div className='w-25'><b>Adress:</b></div>
                  <div className='w-75'> {client && client.adress} </div>
              </div>
              <div className='ms-2 text-start d-flex align-items-start w-100'>
                  <div className='w-25'><b>Phone:</b></div>
                  <div className='w-75'> {client && client.mobilePhone} </div>
              </div>
              <div className='ms-2 text-start d-flex align-items-start w-100'>
                  <div className='w-25'><b>Whatsapp:</b></div>
                  <div className='w-75'> {client && <a target='_blank' href={`https://wa.me/${client.mobilePhone}`}>{client.mobilePhone}</a>} </div>
              </div>
            </div>
          </div>
          <div className="row tab-content mt-5">
            <div className="col-md-9 col-sm-12">
              <ul className="nav nav-tabs tab-menu">
                <li className="active">
                  <NavLink data-toggle="tab" to={{ pathname:`..${path}/history/`, aboutProps: {title:'from home page'} }} >
                    <Icons icon="fa-solid fa-clock-rotate-left" /> History
                  </NavLink>
                </li>
                <li>
                  <NavLink data-toggle="tab" to={{ pathname:`..${path}/meals/`, hash:"" }} >
                    <Icons icon="fa-solid fa-utensils" /> Meals
                  </NavLink>
                </li>
                <li>
                  <NavLink data-toggle="tab" to={{ pathname:`..${path}/measurements/` , hash:"" }} >
                    <Icons icon="fa-solid fa-ruler" /> Measurements
                  </NavLink>
                </li>
                <li>
                  <NavLink data-toggle="tab" to={{ pathname:`..${path}/consultations/` , hash:"" }} >
                    <Icons icon="fa-solid fa-comment-dots" /> Consultations
                  </NavLink>
                </li>
              </ul>
            </div>
            { loginUser.role === "client" &&
            <div className="col text-end">
              <DieticianInfo client = {client} clientReload = {clientReload}></DieticianInfo>
            </div>}
          </div>
          <div className="row">
            <Outlet context={{client:client}}/>
          </div>
        </div>
      </Can>
    </>
  )
}