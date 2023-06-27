import React, {useContext , useState} from 'react';
import {Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import consultationService from '../../../services/consultationService';
import dateForm from '../../../services/dateForm';
import { UserContext } from '../../../contexts/UserContext';

export default function CreateConsultation( { client, getConsultations} ) {
	const {loginUser} = useContext(UserContext)

  const validationSchema = Yup.object().shape({
    content: Yup.string()
      .max(500, 'Content must be 500 characters or less')
      .required('Content is required')
  });
  const createConsultation = async (newConsultation) => {
    try {
      await consultationService.createConsultation(newConsultation) 
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Formik
        initialValues={{
          content: '',
          authorId: loginUser.id,
          dieticienId: client.UserRelation.dieticianId,
          clientId: client.id,
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting,resetForm }) => {
          await createConsultation({...values, ...{createdAt:dateForm().toString()}})
          // Call function to create post with values object
          resetForm({content: ''})
          setSubmitting(false);
          getConsultations()
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
              <button type="submit" className="btn btn-primary yellow-button">{isSubmitting ? 'Creating...' : 'Save'}</button>
              <button type="cancel" className="btn btn-primary cancel-button">Cancel</button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}