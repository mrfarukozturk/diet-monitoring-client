import React from 'react'
import HeaderSlide from '../components/HeaderSlide'

export default function Home() {
  return (
    <>
      <section>
        <HeaderSlide></HeaderSlide>
      </section>
      <div className="container-fluid main-content">
        <div className="container home">
          <div className="row">
            <div className="col-12">
              <hr className='title-line'/>
              <h1>Who We Are AboutUs</h1>
              <p className="display-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tellus sit ullamcorper congue quis. Nisi, id nec</p>
            </div>
            <div className="col-12 col-lg-6">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tellus sit ullamcorper congue quis. Nisi, id nec Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tellus sit ullamcorper congue quis. Nisi, id nec faucibus suspendisse tempus odio vitae, ultrices arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tellus sit ullamcorper congue quis. Nisi, id nec faucibus suspendisse tempus odio vitae, ultrices arcu.</p>
              <button type="button" className="btn btn-warning text-white">Contact Us</button>
            </div>
            <div className="col-12 col-lg-6">
              <div className='content-image-box align-items-center'>
                <img src="./unsplash_6awfTPLGaCE.png" className="d-block" alt="..."/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}
