import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Admin from "./components/Admin/Dashboard/Dashboard"
import Developer from "./components/Developer/Dashboard/Dashboard"
import HR from "./components/HR/Dashboard/Dashboard"
import UserDeveloper from "./components/Admin/User/UserDeveloper"
import UserHR from "./components/Admin/User/UserHR"
import Candidates from "./components/HR/Candidates/Candidates"
import Openings from "./components/HR/Openings/Openings"
import Interview from "./components/HR/Interview/Interview"
import InterviewList from "./components/HR/MyInterview/InterviewList"
import Block from "./components/HR/Block/Block"
import './App.css';

function App() {
  return (
    <div>
      {/* <Navbar/> */}
      <Router>
        <Routes>
          <Route exact path='/admin' element={<Admin/>}/>
          <Route exact path='/openings' element={<Admin/>}/>
          <Route exact path='/edithr' element={<UserHR/>}/>
          <Route exact path='/editdev' element={<UserDeveloper/>}/>


          <Route exact path='/developer' element={<Developer/>}/>
          <Route exact path='/hr' element={<HR/>}/>
          <Route exact path='/candidates' element={<Candidates/>}/>
          <Route exact path='/hropenings' element={<Openings/>}/>
          <Route exact path='/interview' element={<Interview/>}/>
          <Route exact path='/myinterview' element={<InterviewList/>}/>
          <Route exact path='/block' element={<Block/>}/>


        </Routes>
      </Router>
    </div>
  );
}

export default App;
