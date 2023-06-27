import { api } from "./httpService";


const createInvitationToClient = async (user) => {
  try {
    console.log(user)
    //return 
    const response = await api.post(`/userrelations`, user);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


const getUsersByDieticianId = async ( dieticianId ) => {
  try {
    const response = await api.get(`/userrelations?dieticianId=${dieticianId}&order=desc`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


const getUsersByClientId = async ( clientId ) => {
  try {
    const response = await api.get(`/userrelations?clientId=${clientId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};




const getUserByClientId = async ( clientId ) => {
  //console.log( clientId )
  try {
    const response = await api.get( `/userrelations/client?clientId=${ clientId }` );
    return response.data  //user object
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};



const getRelationByClientId = async ( clientId ) => {
  //console.log( clientId )
  try {
    const response = await api.get( `/userrelations/relation?clientId=${ clientId }` );
    return response.data  //user object
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};


const getUserByClientIdAndDieticianId = async ( clientId, dieticianId ) => {
  //console.log(clientId,dieticianId)
  try {
    //TODO 
    const response = await api.get( `/userrelations?clientId=${ clientId }&dieticianId=${ dieticianId }` );
    return response.data  //user object
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};



const updateInvitation = async ( relationId, update )=>{
  //console.log(update)
  try {
    const response = await api.put(`/userrelations/relation/${relationId}`, update);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}



const userRelationService = {
  createInvitationToClient,
  
  getRelationByClientId,

  getUsersByDieticianId,
  getUsersByClientId,

  getUserByClientIdAndDieticianId,
  getUserByClientId,

  updateInvitation
  //getUser,
  //saveUser,
  //getUsers,
  //updateUserRoles
};

export default userRelationService;
