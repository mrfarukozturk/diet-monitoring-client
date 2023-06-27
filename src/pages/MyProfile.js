import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../contexts/UserContext'
import ClientProfile from './ClientProfile'
import { useParams, useLocation } from 'react-router-dom'
import userRelationService from '../services/userRelationService';

export default function MyProfile() {
  const {loginUser} = useContext(UserContext)
  let user = loginUser
  
  let location = useLocation();

  const [client, setClient] = useState({});

  const getRelation = async ()=>{
    const relation = await userRelationService.getRelationByClientId( user.id );
    setClient( { ...user, ...{ UserRelation:relation }} )
  }

  useEffect(() => {
    getRelation()
  }, []);

  return (
    <ClientProfile client={client} parentPath={ location.pathname } clientReload = { getRelation }/>
  )
}