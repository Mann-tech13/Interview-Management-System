import React from 'react'
import Navbar from "../../../layout/Navbar/Navbar"
import HRSidebar from "../../../layout/SidebarNav/HRSidebar"

function Dashboard() {
  return (
    <div>
      <Navbar sidebar={<HRSidebar/>}/>
    </div>
  )
}

export default Dashboard