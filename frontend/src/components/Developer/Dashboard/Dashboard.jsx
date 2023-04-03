import React from 'react'
import Navbar from "../../../layout/Navbar/Navbar"
import DeveloperSidebar from "../../../layout/SidebarNav/DeveloperSidebar"

function Dashboard() {
  return (
    <div>
      <Navbar sidebar={<DeveloperSidebar/>}/>
    </div>
  )
}

export default Dashboard