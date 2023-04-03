import React from 'react'
import Navbar from "../../../layout/Navbar/Navbar"
import AdminSidebar from "../../../layout/SidebarNav/AdminSidebar"


function User() {
  return (
    <div>
      <Navbar sidebar={<AdminSidebar/>}/>
    </div>
  )
}

export default User