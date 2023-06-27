import React, { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'

import userRoles from '../../services/userPermissions'

export default function Can( props ) {


	const {loginUser} = useContext(UserContext)
  let user =  loginUser
  //console.log(user?.role)
  
  let UserRole = []

	if ( user ){
    UserRole =  userRoles[ user.role ]
	}else {
		UserRole = []
	}

  //return (<>{ props.children }</>)


  //if ( !props.todo ) {  return (<>{ props.children }</>) }

  return (
    <>{ UserRole.includes( props.todo ) && props?.children }</>
  )
}
