import React from 'react'
import OpeningsContent from '../../../content/HR/OpeningsContent'
import Navbar from "../../../layout/Navbar/Navbar"
import HRSidebar from "../../../layout/SidebarNav/HRSidebar"

function Openings() {
  return (
    <div>
      <Navbar sidebar={<HRSidebar />} />
      <OpeningsContent />
    </div>
  )
}

export default Openings