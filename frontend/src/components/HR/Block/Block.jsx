import React from 'react'
import Navbar from "../../../layout/Navbar/Navbar"
import HRSidebar from "../../../layout/SidebarNav/HRSidebar"
import BlockContent from '../../../content/HR/BlockContent'

function Block() {
  return (
    <div>
      <Navbar sidebar={<HRSidebar/>}/>
      <BlockContent/>
    </div>
  )
}

export default Block