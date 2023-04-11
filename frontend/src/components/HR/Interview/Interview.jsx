import React from 'react'
import InterviewContent from '../../../content/HR/InterviewContent'
import Navbar from "../../../layout/Navbar/Navbar"
import HRSidebar from "../../../layout/SidebarNav/HRSidebar"


function Interview() {
  return (
    <div>
      <Navbar sidebar={<HRSidebar/>}/>
      <InterviewContent/>
    </div>
  )
}

export default Interview