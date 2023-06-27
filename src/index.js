import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';



import './assets/css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import DieticianProfile from './pages/DieticianProfile';
import ClientView from './pages/ClientView';
import ClientHistory from './components/client/history/ClientHistory';
import ClientMeals from './components/client/meals/ClientMeals';
import ClientMeasurements from './components/client/measurements/ClientMeasurements';
import ClientConsultations from './components/client/consultations/ClientConsultations';
import MyProfile from './pages/MyProfile';
import Settings from './pages/Settings';


const router=createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <h1>error</h1>,
    children: [
    {
      path: "",
      element: <Home/>,
    },
    {
      path: "aboutus",
      element: <AboutUs/>,
    },
    {
      path: "contact",
      element: <Contact/>,
    },
    {
      path: "settings",
      element: <Settings/>,
    },
    {
      path: "dietician-profile",
      element: <DieticianProfile/>,
    },

    {
      path: "my-profile",
      element: <MyProfile/>,
      children: [
        {
          path: "",
          element: <ClientHistory/>,
        },        
        {
          path: "history",
          element: <ClientHistory/>,
        },
        {
          path: "meals",
          element: <ClientMeals/>,
        },
        {
          path: "measurements",
          element: <ClientMeasurements/>,
        },
        {
          path: "consultations",
          element: <ClientConsultations/>,
        },
      ]
    },

    
    {
      path: "client-profile/:userId",
      element: <ClientView/>,
      children: [
        {
          path: "",
          element: <ClientHistory/>,
        },        
        {
          path: "history",
          element: <ClientHistory/>,
        },
        {
          path: "meals",
          element: <ClientMeals/>,
        },
        {
          path: "measurements",
          element: <ClientMeasurements/>,
        },
        {
          path: "consultations",
          element: <ClientConsultations/>,
        },
      ]
    }
    ]
  }]
)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <Auth0Provider
    domain='dev-la2px0nm0h5np244.us.auth0.com'
    clientId='xpQALValRFI3Lpqea3sfBHMlFhZGSH2L'
    authorizationParams={{
      redirect_uri: 'http://localhost:3000'
    }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
    
  //</React.StrictMode>
);



/*

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
