import React from 'react'
import HeaderSlide from '../components/HeaderSlide'

export default function AboutUs() {
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
              <h1>About Us</h1>
              <p className="display-6"></p>
            </div>
            <div className="col-12 col-lg-6">
              <p>Welcome to our app, designed for those who prioritize nutrition and health. Our goal is to support a healthy lifestyle and help you achieve your personal dietary goals.</p>
              <p>Our app caters to anyone looking to adopt a healthier lifestyle by collaborating with nutrition consultants. Users can easily log in to our app using their Google accounts or any other email address.</p>
              <p>What We Offer:</p>
              <p>Food Tracking: Our app makes it easy for users to track their daily food intake. You can log your meals and beverages, analyze their nutritional values, and create personalized meal plans that align with your goals.</p>
              <p>Consultant Communication: Our app enables you to communicate with your trusted health consultant. You can share your food consumption details, update your weight and body measurements, engage in written conversations, and receive dietary advice from your consultant.</p>

            </div>
            <div className="col-12 col-lg-6">
              <div className='content-image-box align-items-center'>
                <img src="./unsplash_6awfTPLGaCE.png" className="d-block" alt="..."/>
              </div>
            </div>
            <div className="col">
              <p>Personalized Support: Our app allows you to collaborate with nutrition experts who provide tailored advice based on your dietary goals and preferences. They analyze your eating habits, monitor your progress, and keep you motivated while helping you create the most suitable meal plans.</p>
              <p>Privacy and Security Are Our Priorities</p>
              <p>We value the security and privacy of your data. All personal and health information is securely protected and shared only between you and your consultant.</p>
              <p>Let's Build a Healthy Future Together</p>
              <p>Join our app to embrace a healthy lifestyle, improve your eating habits, and achieve your goals. By collaborating with our nutrition consultants, you'll receive personalized support and take the necessary steps towards a healthier lifestyle.</p>
              <p>Remember, healthy eating is just a click away!</p>

            </div>


          </div>
        </div>
      </div>
    </>


  )
}
