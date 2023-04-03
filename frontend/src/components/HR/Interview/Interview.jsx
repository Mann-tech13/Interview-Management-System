import React from 'react'
import Navbar from "../../../layout/Navbar/Navbar"
import HRSidebar from "../../../layout/SidebarNav/HRSidebar"


function Interview() {
  return (
    <div>
      <Navbar sidebar={<HRSidebar/>}/>
    </div>
  )
}

export default Interview