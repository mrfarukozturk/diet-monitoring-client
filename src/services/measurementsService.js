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



const createPost = async (pNewPost) => {
  try {
    const response = await api.post("/posts", pNewPost);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
*/
const getMeasurementsByClientId = async (clientId) => {
  try {
    const response = await api.get(`/measurements?clientId=${clientId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


const createMeasurement = async (pNewMeasurement) => {
  try {
    const response = await api.post("/measurements", pNewMeasurement);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


const updateMeasurement = async (measurement) => {
  //console.log(measurement)
  try {
    const response = await api.put("/measurements/" + measurement.id, measurement);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};



const deleteMeasurement = async (measurementId) => {
  try {
    const response = await api.delete("/measurements/" + measurementId );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


const measurementService = {
  //getPosts,
  //createPost,
  getMeasurementsByClientId,
  updateMeasurement,
  createMeasurement,
  deleteMeasurement
};

export default measurementService;
