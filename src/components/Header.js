import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

import HeaderSlide from '../components/HeaderSlide';
import HeaderMenu from './HeaderMenu';
import { useAuth0 } from '@auth0/auth0-react'
import UserInfo from './UserInfo';
import Can from './permissions/Can';

export default function Header() {
  const params = useAuth0();
  //console.log(params)
  //const {isAuthenticated, user} = useAuth0();

  const {loginWithRedirect} = useAuth0();


	const {loginUser} = useContext(UserContext)
  let user =  loginUser
  if (!user) {
    //return null;
  }


  return (
    <>
    <header>
      <nav className="navbar ">
        <div className="container-fluid">
          <div className="container">
              <div className="col-12 d-flex flex-wrap justify-content-between align-items-center">
              <a href="/" className='order-0 order-md-0 order-md-1'>
                  <img className="larger" src="./logo.svg" alt="HTML logo vector"/>
              </a>
                <HeaderMenu></HeaderMenu>
                {user ? <UserInfo user = { user }/> : <button type="button" onClick={()=> loginWithRedirect()} className="btn h-login-button order-1 order-md-2">LOGIN</button>}
              </div>
          </div>
        </div>
      </nav>
    </header>
   </> 

  )
}
