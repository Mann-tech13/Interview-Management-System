import React from 'react'
import Navbar from "../../../layout/Navbar/Navbar"
import HRSidebar from "../../../layout/SidebarNav/HRSidebar"
import InterviewListContent from '../../../content/HR/InterviewListContent'

function InterviewList() {
  return (
    <div>
      <Navbar sidebar={<HRSidebar/>}/>
      <InterviewListContent/>
    </div>
  )
}

export default InterviewList