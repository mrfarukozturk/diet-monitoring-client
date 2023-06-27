import React, { useState, useContext } from 'react'
import Icons from '../../Icons'
import mealService from '../../../services/mealService'
import ExText from '../../ExText'
import dateForm from '../../../services/dateForm';
import UpdateForm from './UpdateForm';
import { UserContext } from '../../../contexts/UserContext'

export default function MealCard({ client, meal, getMeals }) {
  const {loginUser} = useContext(UserContext)

  const deleteMeal = async (mealId) => {
    try {
      await mealService.deleteMeal(mealId) 
      getMeals();
    } catch (error) {
      console.log(error);
    }
  }

  const [ isEdit, setIsEdit ] = useState( false )

  //console.log(client)
  
  return (
    <div className="card mb-3 meal-card">
      <div className="card-body">
        { isEdit ? (loginUser.role === "client" && (<UpdateForm client={client} getMeals = {getMeals} setIsEdit = { setIsEdit } meal = {meal}/>))
        : 
        <p className="card-text">{ <ExText>{meal?.meals}</ExText> }</p>
        }
      </div>
      <div className="card-footer d-flex justify-content-between">
        <div className='d-flex justify-content-between'>
          <div className='date-circle d-flex justify-content-center align-items-center text-center'>
            <div>
              <h6>{dateForm(meal?.createdAt).getDate()}</h6>
              <h6>{dateForm(meal?.createdAt).getMonth()}</h6>
            </div>
          </div>
        </div>
        { loginUser.role === "client" &&
        <div className='d-flex align-items-center'>
          <Icons icon="fa-solid fa-file-pen" className="me-1 hover-yellow" onClick={ ()=>setIsEdit(true) } />
          <Icons icon="fa-solid fa-trash-can" className="ms-2 hover-yellow" onClick={()=>deleteMeal( meal?.id )} />
        </div>}

      </div>
    </div>
  )
}
