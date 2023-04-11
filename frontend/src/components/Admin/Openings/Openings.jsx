import React from 'react'
import OpeningsContent from '../../../content/Admin/OpeningsContent'
import Navbar from "../../../layout/Navbar/Navbar"
import AdminSidebar from "../../../layout/SidebarNav/AdminSidebar"


function Openings() {
  return (
    <div className="">
      <Navbar sidebar={<AdminSidebar />} />
      <OpeningsContent />
    </div>
  )
}

export default Openings