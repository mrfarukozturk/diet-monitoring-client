import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import userService from '../services/userService';
import { useNavigate } from 'react-router-dom';

const useCheckUser = ( isAction ) => {

  const { user, isAuthenticated } = useAuth0();
  const { isLoading } = useAuth0();
  let navigate = useNavigate();


    //console.log("isLoading:",isLoading)

    //console.log("isAuthenticated:",isAuthenticated)
  if ( !isLoading && !isAuthenticated ) {
    //navigate('/');
  }


  const [currentUser, setCurrentUser] = useState(user);

  const checkUser = async () => {

    if (isAuthenticated) {

      const remoteUser = await userService.getUser(user.email);
      if (remoteUser) {
        setCurrentUser(remoteUser)
        localStorage.setItem('loginUser', JSON.stringify( remoteUser ));

        //navigate('/');
      } else {

        try {

          const initialValues = {
            firstName: user?.given_name,
            lastName: user?.family_name,
            birthday: "",
            email: user?.email,
            profileImage:user?.picture
          }

          const sendNewUser = await userService.saveUser(initialValues)
          //const newUser = await userService.getUser( sendNewUser.email );
          setCurrentUser(sendNewUser)
          localStorage.setItem('loginUser', JSON.stringify( sendNewUser ));
          navigate("/client-profile")
        } catch (error) {
          console.log(error);
        }
        //navigate('/');
      }
    }else {
      //console.log("Else checkUser isAuthenticated")
      
      const loginUser = JSON.parse( localStorage.getItem('loginUser') );
      if ( loginUser !== null ){
        setCurrentUser( loginUser );
      }else {
        //console.log("localStorage Boş")
      }
    }
  };
  
  if ( isAction ) {
     checkUser();
  }


  useEffect(() => {    

    checkUser();   

  }, [isAuthenticated]);

  return { loginUser:currentUser, setCurrentUser };
};

export default useCheckUser;