import React from 'react'
import Navbar from "../../../layout/Navbar/Navbar"
import AdminSidebar from "../../../layout/SidebarNav/AdminSidebar"


function Openings() {
  return (
    <Navbar sidebar={<AdminSidebar/>}/>
  )
}

export default Openings