import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../contexts/UserContext'
import ClientProfile from './ClientProfile'
import { useParams, useLocation } from 'react-router-dom'
import userRelationService from '../services/userRelationService';

export default function ClientView() {
  const {loginUser} = useContext(UserContext)
  let user = loginUser
  let location = useLocation();
  let { userId } = useParams();
  const [client, setClient] = useState({});

  const getClient = async ()=>{
    //console.log( userId, user.id )
    const getUser = await userRelationService.getUserByClientIdAndDieticianId( userId, user.id );
    //console.log(getUser)
    setClient(getUser)
  }

  useEffect(() => {
    getClient()
  }, []);

  return (
    <ClientProfile client={client} parentPath={ location.pathname } clientReload = { getClient } routers={[{name: "Home", path: "dietician-profile",},{name: "Client Page", path: "." + location.pathname,},]}/>
  )
}