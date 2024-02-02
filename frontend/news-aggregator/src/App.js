import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Welcome from "./Welcome"
import Preferences from "./Preferences"
import FrontPage from "./FrontPage"


let username = localStorage.getItem('username')
console.log(username)
function App() {

  return (
  <>
  
    <div className="App">
 
      <BrowserRouter>
      <Routes>
        <Route exact path = "/" element={<Welcome />}></Route>
        <Route exact path = "/users" element={<Preferences />}></Route>
        <Route exact path = "/users/preferences" element={<FrontPage />}></Route>




      </Routes>
      </BrowserRouter>



</div>

    </>
  );

}

export default App;
