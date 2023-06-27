import React, {useState, useEffect, useContext} from 'react'
import Icons from '../../Icons'
import { useOutletContext } from 'react-router-dom'
import MealCard from './MealCard'
import CreateMeal from './CreateMeal'
import mealService from '../../../services/mealService'
import { UserContext } from '../../../contexts/UserContext'

export default function ClientMeals() {
  const {loginUser} = useContext(UserContext)

  const {client} = useOutletContext();

  const [meals, setMeals] = useState([]);

  const getMeals = async () => {
    const meals = await mealService.getMealsByClientId(client.id);
    //console.log(meals)
    setMeals(meals)
  }
  
  useEffect(() => {
    getMeals()
  }, []);

  return (
    <div className="card client-tabs meals">
      <div className="card-header">
        <Icons icon="fa-solid fa-clock-rotate-left" /> Meals
      </div>
      <div className="card-body">
        <div className="row">
          { loginUser.role === "client" && (client.UserRelation && <CreateMeal client={client} getMeals = { getMeals }/>)}
        </div>
        <div className="row">
          {meals.length > 0 ? meals.map((meal,i) => (
            <MealCard client={client} key={i} meal={meal} getMeals = { getMeals }/>
          )):
            <h4 className='text-warning'>No meals yet!</h4>
          }

        </div>        
      </div>
    </div>
  )
}
