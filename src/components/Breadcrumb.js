import React from 'react'
import Icons from './Icons'
import {  NavLink } from 'react-router-dom';

export default function Breadcrumb({ routers }) {

  return (
    <>

    { routers &&
       <div className="container mt-4">
        <div className="row justify-content-md-start">
          <nav aria-label="breadcrumb" className="h-breadcrumb">
            <ol className="breadcrumb my-2">
              {
                routers?.map(( router, i )=>{
                  return(
                    <li key={i} className="breadcrumb-item">
                      <NavLink to={"/" + router.path}>{router.name}</NavLink>
                    </li>
                  )
                })
              }
            </ol>
          </nav>
        </div>
      </div>}
    </>
  )
}