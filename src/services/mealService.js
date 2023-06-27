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


const createMeal = async (newMeal) => {
  try {
    const response = await api.post("/meals", newMeal);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getMealsByClientId = async (clientId) => {
  try {
    const response = await api.get(`/meals?clientId=${clientId}&order=desc`);
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


const updateMeal = async (meal) => {
  //console.log(meal)
  try {
    const response = await api.put("/meals/" + meal.id, meal);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};



const deleteMeal = async (mealId) => {
  try {
    const response = await api.delete("/meals/" + mealId);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};




const mealService = {
  //getPosts,
  //createPost,
  getMealsByClientId,
  createMeal,
  updateMeal,
  deleteMeal,
  //generatePdf
};

export default mealService;
