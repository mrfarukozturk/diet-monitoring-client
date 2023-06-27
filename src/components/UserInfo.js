import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import jwt_decode from 'jwt-decode';
import Can from './permissions/Can';
import { NavLink } from 'react-router-dom';

export default function UserInfo( props) {
  const { logout } = useAuth0();
  const {getIdTokenClaims, user, isAuthenticated, isLoading} = useAuth0();



  const handleButtonClick = async () => {
    const idTokenClaims = await getIdTokenClaims();
    //console.log(idTokenClaims);


    const rawToken = idTokenClaims.__raw;
    const decodedToken = jwt_decode(rawToken);
    //console.log(decodedToken);
    // JWT'yi çözme işlemi
    //const decodedToken = jwt_decode(rawToken);
    //console.log(decodedToken);
  };



  //console.log( user )

  return (
    <>
      <div className="btn-group order-1 order-md-2">
        <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
          <img className='profile-image' src={props.user.profileImage ? props.user.profileImage :"Unknown_person.jpg"}/>
        </a>
        <ul className="dropdown-menu dropdown-menu-end">
          <li>
            <div className='d-flex justify-content-center align-items-center align-middle p-3 m-2'>
              <img className='profile-image' src={props.user.profileImage ? props.user.profileImage :"Unknown_person.jpg"}/>
              <div className='ms-2 me-auto text-start'>
                <h6 className='user-name'>{props.user?.firstName} {props.user?.lastName}</h6>
                <a className='logout-button' onClick={() =>{ 
                  localStorage.removeItem('loginUser');

                  logout({ logoutParams: { returnTo: window.location.origin } })

                  } } >
                  Log out
                </a>
              </div>
            </div>
          </li>
          <li><hr className="dropdown-divider"/></li>
        <Can capability="profile_viewing" todo="dietician_profile_link">
          <li>
            <NavLink className="dropdown-item" to='dietician-profile'>Dietician Profile</NavLink>
          </li>
        </Can>
        <Can capability="profile_viewing" todo="client_profile_link">
          <li>
            <NavLink className="dropdown-item" to='my-profile'>My Profile</NavLink>
          </li>        
        </Can>
          <li>
            <NavLink className="dropdown-item" to='settings'>Settings</NavLink>
          </li>        
        </ul>
      </div>
    </>
  )
}
