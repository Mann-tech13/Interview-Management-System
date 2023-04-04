import React from 'react'
import Navbar from "../../../layout/Navbar/Navbar"
import AdminSidebar from "../../../layout/SidebarNav/AdminSidebar"
import UserHRContent from '../../../content/Admin/UserHRContent'


function User() {
  return (
    <div>
      <Navbar sidebar={<AdminSidebar/>}/>
      <UserHRContent/>
    </div>
  )
}

export default User