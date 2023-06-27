import React from 'react'
import {Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import consultationService from '../../../services/consultationService'
import dateForm from '../../../services/dateForm';
export default function UpdateForm( {client, getConsultations, setIsEdit, consultation} ) {


  const validationSchema = Yup.object().shape({
    content: Yup.string()
      .max(500, 'Content must be 500 characters or less')
      .required('Content is required')
  });
  const updateConsultation = async (uConsultation) => {
    try {
      await consultationService.updateConsultation(uConsultation) 
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Formik
        initialValues={{
          content: '',

          ...consultation
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          await updateConsultation({...values, ...{updateAt:dateForm().toString()}})

          
          resetForm({content: ''})
          setSubmitting(false);
          getConsultations()
          setIsEdit(false)
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-3">
              <Field
                rows="5"
                as="textarea"
                type="text"
                name="content"
                id="content"
                className="form-control"
              />
              <ErrorMessage
                name="content"
                component="div"
                className="text-danger"
              />
              
            </div>
            <div className="mb-3 text-start">
              <button type="submit" className="btn btn-primary yellow-button">{isSubmitting ? 'Creating...' : 'Update'}</button>
              <button type="cancel" className="btn btn-primary cancel-button" onClick={ ()=>setIsEdit(false) }>Cancel</button>
            </div>
          </Form>
        )}
      </Formik>







    </>
  )
}
