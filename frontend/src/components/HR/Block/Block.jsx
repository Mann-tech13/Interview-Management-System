import React from 'react'
import Navbar from "../../../layout/Navbar/Navbar"
import HRSidebar from "../../../layout/SidebarNav/HRSidebar"

function Block() {
  return (
    <div>
      <Navbar sidebar={<HRSidebar/>}/>
    </div>
  )
}

export default Block