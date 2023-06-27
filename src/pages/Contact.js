import React from 'react'
import HeaderSlide from '../components/HeaderSlide'
import Icons from '../components/Icons'

export default function Contact() {
  return (
    <>

      <section>
          <HeaderSlide></HeaderSlide>
      </section>
      <div className="container-fluid main-content">
        <div className="container contact">
          <div className="row">
            <div className="col-12">
              <hr className='title-line'/>
              <h1>Get In Touch</h1>
            </div>
          </div>
          <div className="row d-flex justify-content-center">

            <div className="col-8 mt-5">
              <div className='content-image-box align-items-center'>
                <div className='box d-flex align-items-center '>
                  <div className='ms-5'>
                    <h3>Get in Touch With Us</h3>
                    <h6>Contact info</h6>
                    <span><Icons icon="fa-solid fa-mobile-screen" /> +41 77 258 40 69</span>
                    <span><Icons icon="fa-regular fa-envelope" /> mrfarukozturk@gmail.com</span>


                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>


  )
}
