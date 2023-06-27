import './assets/css/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import { UserContextProvider } from './contexts/UserContext';

//import { useAuth0 } from '@auth0/auth0-react'

function App() {
  //const params = useAuth0();
  //const {isAuthenticated, user} = useAuth0();



  return (
    <div className="App">
      <UserContextProvider>
        <Header></Header>
        <main>
          <section>
          <Outlet />

          </section>
        </main>
        <Footer></Footer>
      </UserContextProvider>
    </div>
  );
}

export default App;
