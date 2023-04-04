import React from 'react'
import Navbar from "../../../layout/Navbar/Navbar"
import AdminSidebar from "../../../layout/SidebarNav/AdminSidebar"
import UserDevContent from '../../../content/Admin/UserDevContent'


function UserDeveloper() {
  return (
    <div>
      <Navbar sidebar={<AdminSidebar/>}/>
      <UserDevContent/>
    </div>
  )
}

export default UserDeveloper