import React from 'react'
import {Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import mealService from '../../../services/mealService';
import dateForm from '../../../services/dateForm';

export default function UpdateForm( { client, getMeals, setIsEdit, meal } ) {
  //console.log(client)
  const validationSchema = Yup.object().shape({
    meals: Yup.string()
      .max(500, 'Content must be 500 characters or less')
      .required('Content is required')
  });

  const updateMeal = async (newMeal) => {
    try {
      await mealService.updateMeal(newMeal) 
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Formik
        initialValues={{
          meals: '',
          //createdAt:dateForm().toString(),
          dieticienId:client.UserRelation.dieticianId,
          clientId:client.id,
          ...meal
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting,resetForm }) => {
          await updateMeal(values)

          // Call function to create post with values object
          resetForm({meals: ''})
          setSubmitting(false);
          getMeals();
          setIsEdit(false);
        }}
      >
        {({ isSubmitting }) => (
            <Form>


              <div className="mb-3">
                <Field
                  type="text"
                  name="createdAt"
                  id="createdAt"
                  className="form-control"
                />
                <ErrorMessage
                  name="createdAt"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="mb-3">
                <Field
                  rows="4"
                  as="textarea"
                  type="text"
                  name="meals"
                  id="meals"
                  className="form-control"
                />
                <ErrorMessage
                  name="meals"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="mb-3 text-end">
                <button type="submit" className="btn btn-primary add-meal-button">{isSubmitting ? 'Creating...' : 'Update'}</button>
                <button type="cancel" className="btn cancel-button" onClick={ ()=>setIsEdit(false) }>Cancel</button>


              </div>
            </Form>
          )}
      </Formik>

    </>
  )
}
