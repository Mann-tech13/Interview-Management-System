import React from 'react'
import Navbar from "../../../layout/Navbar/Navbar"
import HRSidebar from "../../../layout/SidebarNav/HRSidebar"
import CandidateContent from '../../../content/HR/CandidateContent'


function Candidates() {
  return (
    <div>
      <Navbar sidebar={<HRSidebar/>}/>
      <CandidateContent/>
    </div>
  )
}

export default Candidates