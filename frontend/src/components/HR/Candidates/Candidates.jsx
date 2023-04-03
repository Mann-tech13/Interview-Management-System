import React from 'react'
import Navbar from "../../../layout/Navbar/Navbar"
import HRSidebar from "../../../layout/SidebarNav/HRSidebar"


function Candidates() {
  return (
    <div>
      <Navbar sidebar={<HRSidebar/>}/>
    </div>
  )
}

export default Candidates