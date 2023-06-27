import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../contexts/UserContext'
import Icons from '../components/Icons'
import userService from '../services/userService'
import {Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function Settings() {
  const {loginUser, setCurrentUser} = useContext(UserContext)
  

  const validationSchema = Yup.object().shape();
  const updateUser = async ( params ) => {
    try {
      await userService.updateUser( params ) 
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {

  }, []);
  return (
    <>
      <Formik
        initialValues={{
          firstName: loginUser?.firstName ,
          lastName:loginUser?.lastName ,
          adress: loginUser?.adress ,
          mobilePhone: loginUser?.mobilePhone ,
          //authorId: loginUser.id,
          //dieticienId: client.UserRelation.dieticianId,
          //clientId: client.id,
        }}
        //validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting,resetForm }) => {
          //console.log(values)
          await updateUser({...loginUser, ...values})
          setCurrentUser({...loginUser, ...values})
          // Call function to create post with values object
          //resetForm({content: ''})
          setSubmitting(false);
          //getConsultations()
        }}
      >
        {({ isSubmitting }) => (
        <Form>
          <div className="container profile-box">
            <div className="row justify-content-md-center">
              <div className="col col-lg-4 d-flex align-items-center name-box pb-3">
                <img className='profile-image' src={loginUser.profileImage ? loginUser.profileImage :"Unknown_person.jpg"}></img>
                <div className='ms-2 me-auto text-start user-info'>
                  <h2 className='name-surname'>{loginUser && loginUser.firstName} {loginUser && loginUser.lastName}</h2>
                  <h5 className='role-name'> {loginUser && loginUser.role} </h5>
                </div>
              </div>
              <div className="col col-lg-8 d-flex flex-column align-self-center mt-2">
                <div className='ms-2 text-start d-flex align-items-start w-100'>
                  <div className='w-25'><b>Adress:</b></div>
                  <div className='w-75'> {loginUser && loginUser.adress} </div>
                </div>
                <div className='ms-2 text-start d-flex align-items-start w-100'>
                  <div className='w-25'><b>Email:</b></div>
                  <div className='w-75'> {loginUser && loginUser.email} </div>
                </div>
                <div className='ms-2 text-start d-flex align-items-start w-100'>
                  <div className='w-25'><b>Phone:</b></div>
                  <div className='w-75'> {loginUser && loginUser.mobilePhone} </div>
                </div>
                <div className='ms-2 text-start d-flex align-items-start w-100'>
                  <div className='w-25'><b>Whatsapp:</b></div>
                  <div className='w-75'> {loginUser && <a target='_blank' href={`https://wa.me/${loginUser.mobilePhone}`}>{loginUser.mobilePhone}</a>} </div>
                </div> 
              </div>
            </div>
          </div>
          <div className="container profile-box client-list-box">
            <div className="row">
              <ul className="nav nav-tabs tab-menu">
                <li className="active">
                  <a data-toggle="tab" href="#"><Icons icon="fa-solid fa-gears" /> Settings</a>
                </li>
              </ul>
            </div>
            <div className="row gy-3 py-3">
              <div className="col-md-6">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <Field as="input" type="text" name="firstName" id="firstName" className="form-control"/>
                <ErrorMessage name="firstName" component="div" className="text-danger" />
              </div>
              <div className="col-md-6">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <Field as="input" type="text" name="lastName" id="lastName" className="form-control"/>
                <ErrorMessage name="lastName" component="div" className="text-danger" />
              </div>
              <div className="col-12">
                <label htmlFor="adress" className="form-label">Address</label>
                <Field as="input" type="text" name="adress" id="adress" className="form-control"/>
                <ErrorMessage name="adress" component="div" className="text-danger" />
              </div>
              <div className="col-12">
                <label htmlFor="mobilePhone" className="form-label">Phone</label>
                <Field as="input" type="text" name="mobilePhone" id="mobilePhone" className="form-control"/>
                <ErrorMessage name="mobilePhone" component="div" className="text-danger" />
              </div>

              <div className="col-12 text-end">
                <button type="submit" className="btn btn-primary">{isSubmitting ? 'Updating...' : 'Update'}</button>
              </div>
            </div>
          </div>
        </Form>
        )}
      </Formik>
    </>
  )
}