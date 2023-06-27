import React, { useContext, useEffect, useState } from 'react'
import Icons from '../../Icons'
import { useOutletContext } from 'react-router-dom'

import ConsultationCard from './ConsultationCard'
import CreateConsultation from './CreateConsultation'
import consultationService from '../../../services/consultationService'

import { UserContext } from '../../../contexts/UserContext'


export default function ClientConsultations( ) {
	const {loginUser} = useContext(UserContext)
  let user =  loginUser

  //console.log(user)

  const {client} = useOutletContext();

  const [consultations, setConsultations] = useState([]);
  const [order,setOrder] = useState('asc')

  const getConsultations = async () => {
    const consultations = await consultationService.getConsultationsByClientId( client.id );
    setConsultations(consultations)
  }
   
  useEffect(() => {
    getConsultations()
  }, []);

  return (
    <div className="card client-tabs consultations">
      <div className="card-header">
        <Icons icon="fa-solid fa-clock-rotate-left" /> Consultations
      </div>
      <div className="card-body">
        <div className="row">
          { client.UserRelation && <CreateConsultation getConsultations = {getConsultations} client={client}/>}
        </div>
        <div className="row">
          {consultations.length > 0 ? consultations.map((consultation) => (
            <ConsultationCard key={consultation.id} consultation = {consultation} getConsultations = {getConsultations} client={client}/>
          )):
            <h4 className='text-warning'>No consultations yet!</h4>
          }
        </div>   
      </div>
    </div>
  )
}