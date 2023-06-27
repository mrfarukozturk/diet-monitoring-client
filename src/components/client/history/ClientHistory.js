import React from 'react'
import Icons from '../../Icons'
import { useOutletContext } from 'react-router-dom'

export default function ClientHistory() {

  const {client} = useOutletContext();

  //let location = useLocation();


  return (
    <div className="card client-tabs">
      <div className="card-header">
        <Icons icon="fa-solid fa-clock-rotate-left" /> History
      </div>
      <div className="card-body">
        ClientHistory
      </div>
    </div>
  )
}
