import './App.css';
import Home from "./components/home/home"
import Login from "./components/login/login"
import Signup from './components/signup/signup';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';


function App() {

  const [ user, setLoginUser] = useState({})

  return (
    <div className="App"  >
      <Router> 
        <Routes>
          <Route exact path="/" element =
            {
              (user && user.name) ? <Home setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          />
          <Route path="/login"  element = { <Login /> } />

          <Route path="/register"  element = { <Signup /> } />
         
        </Routes>
      </Router>
    </div>

  );
}

export default App;
