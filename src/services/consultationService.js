import {api} from "./httpService"

/*
const getPosts = async (order = 'asc') => {
  try {
    const response = await api.get(`/posts?order=${order}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


*/
const createConsultation = async (pNewConsultation) => {
  //console.log(pNewConsultation)
  try {
    const response = await api.post("/consultations", pNewConsultation);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const updateConsultation = async (consultation) => {
  try {
    const response = await api.put("/consultations/" + consultation.id, consultation);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


const getConsultationsByClientId = async (clientId) => {
  try {
    const response = await api.get(`/consultations?clientId=${clientId}&order=desc`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/*
const getPostById = async (postId) => {
  try {
    const response = await api.get(`/posts/${postId}`);
    console.log(response,"response bu iste");
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};


*/

const deleteConsultation = async (consultationId) => {
  try {
    const response = await api.delete("/consultations/" + consultationId, consultationId);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};







const consultationService = {
  //getPosts,
  createConsultation,
  getConsultationsByClientId,
  //getPostById,
  updateConsultation,
  deleteConsultation,
};

export default consultationService;
