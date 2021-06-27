import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from "./components/layouts/navbar.js"
import Home from "./components/pages/Home.js"
import Gueststate from './context/guestcontext/gueststate'
import AuthState from './context/authContext/authstate';
import Register from './components/pages/register';
import Login from './components/pages/Login';
import Privateroute from './components/pages/routes/route';
import setToken from './utils/setToken';

if(localStorage.token){
  setToken(localStorage.token)
}

function App() {
  
  return (
    <AuthState>
    <Gueststate>
    <Router>
    <div >
      <Navbar />
      <Switch>
        <Privateroute exact path = '/' component= {Home} />
        <Route exact path='/register' component= {Register} />
        <Route exact path='/login' component= {Login} />
      </Switch>
      
    </div>
    </Router>
   
    </Gueststate>
    </AuthState>

  );
}


export default App;
