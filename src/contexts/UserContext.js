import { useAuth0 } from "@auth0/auth0-react";
import { createContext } from "react";
import { initializeHttpService } from "../services/httpService";
import useCheckUser from "../hooks/useCheckUser";
import Loading from "../components/Loading";

export const UserContext = createContext();

export const UserContextProvider = ({children}) => {
  const { isLoading } = useAuth0();

  //console.log("UserContextProvider->isLoading:", isLoading )
  const { getAccessTokenSilently } = useAuth0();

  initializeHttpService(getAccessTokenSilently, "http://localhost:3500/api/v1/");



  let { loginUser, setCurrentUser } = useCheckUser();

  //console.log("UserContext.Provider")
  //console.log("sss",user)
  return (
    <UserContext.Provider value={{ loginUser, setCurrentUser }}>
      
      {isLoading && <Loading/>}
      {!isLoading && children}
    </UserContext.Provider>
  )
}