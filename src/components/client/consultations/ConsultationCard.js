import React, { useState, useContext } from 'react'
import Icons from '../../Icons'
import consultationService from '../../../services/consultationService'
import ConsultationForm from './CreateConsultation'
import UpdateForm from './UpdateForm'
import ExText from '../../ExText'
import { UserContext } from '../../../contexts/UserContext'
import DateView from '../../DateView'


export default function ConsultationCard( { client, consultation, getConsultations } ) {
  const {loginUser} = useContext(UserContext)

  const deleteConsultation = async (consultationId) => {
    try {
      await consultationService.deleteConsultation(consultationId) 
      getConsultations();
    } catch (error) {
      console.log(error);
    }
  }

  const [ isEdit, setIsEdit ] = useState( false )


  return (
    <div className="card mb-3 consultation-card">
      <div className="card-body">
        { isEdit ? <UpdateForm client={client} getConsultations = {getConsultations} setIsEdit = { setIsEdit } consultation = {consultation}/>
        : 
        <p className="card-text">{ <ExText>{consultation?.content}</ExText> }</p>
        }
      </div>
      <div className="card-footer d-flex justify-content-between">
        <div className='d-flex justify-content-between align-items-center'>
          <img className='client-profile-image' src={consultation?.User.profileImage}></img>
          <div className='ms-2 me-auto text-start'>
            <div className='sender-text'>
              {
                loginUser.id === consultation.authorId && "Posted by you."
              }
              {loginUser.id !== consultation.authorId && <>Submitted by <b>{consultation?.User.role ==="dietician" && "dietician"}</b> {consultation?.User.firstName} {consultation?.User.lastName}</>}
            </div>
            <div className='date-text'><DateView>{ consultation?.createdAt }</DateView></div>
          </div>
        </div>
        {loginUser.id === consultation.authorId &&
        <div className='d-flex align-items-center'>
          <Icons icon="fa-solid fa-file-pen" className="me-1 hover-yellow" onClick={ ()=>setIsEdit(true) } />
          <Icons icon="fa-solid fa-trash-can" className="ms-2 hover-yellow" onClick={()=>deleteConsultation( consultation?.id )} />
        </div>}
      </div>
    </div>
  )
}
