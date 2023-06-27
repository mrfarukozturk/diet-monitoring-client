import React, {useState} from 'react'
import {Formik, Form, Field, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';
import mealService from '../../../services/mealService';
import dateForm from '../../../services/dateForm';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default function CreateMeal( { client, getMeals } ) {
  const [startDate, setStartDate] = useState(new Date());

  const validationSchema = Yup.object().shape({
    meals: Yup.string()
      .max(500, 'Content must be 500 characters or less')
      .required('Content is required')
  });

  const createMeal = async (newMeal) => {
    try {
      await mealService.createMeal(newMeal) 
    } catch (error) {
      console.log(error);
    }
  }

  

  return (
    <>
      <Formik
        initialValues={{
          meals: '',
          createdAt:dateForm().toString(),
          dieticienId:client.UserRelation.dieticianId,
          clientId:client.id,
        }}
        validationSchema={validationSchema}

        onSubmit={async (values, { setSubmitting,resetForm }) => {


          //console.log( values )
          //console.log( {...values, ...{createdAt:dateForm().toString()}} )
          await createMeal(values)

          // Call function to create post with values object
          resetForm({meals: ''})
          setSubmitting(false);
          getMeals()
        }}
      >
        {({ isSubmitting, setFieldValue }) => (
            <Form>


              <div className="mb-3">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => {setStartDate(date);setFieldValue("createdAt", dateForm(date).toString());}}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  timeCaption="time"
                  //dateFormat="MMMM d, yyyy h:mm aa"
                  dateFormat="yyyy-MM-dd HH:mm"
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
                <button type="submit" className="btn btn-primary add-meal-button">{isSubmitting ? 'Creating...' : 'Add Meals'}</button>
              </div>
            </Form>
          )}
      </Formik>
    </>
  )
}


const DateInput = () => {
  console.log("date ınput")
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="time"
      dateFormat="MMMM d, yyyy h:mm aa"
    />
  );
};