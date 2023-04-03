import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { Dropdown } from 'primereact/dropdown';

function SidebarNav() {
  const navigate = useNavigate()

  const [visible, setVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const users = [
    { user: 'HR' },
    { user: 'Developer' }
  ];
  const handleDropdown = (e) => {
    setSelectedUser(e.value)
    if(e.value.user === 'HR'){
      navigate("/edithr")
    }
    else if(e.value.user === 'Developer'){
      navigate("/editdev")
    }
  }
  

  return (
    <div>
      <div className="card flex justify-content-center">
        <Sidebar visible={visible} onHide={() => setVisible(false)}>
          <p onClick={() => navigate("/admin")}>Home</p>
          <p onClick={() => navigate("/openings")}>Job Postings</p>
          <Dropdown value={selectedUser} onChange={(e) => handleDropdown(e)} options={users} optionLabel="user"
            placeholder="Select a User" className="w-full md:w-14rem" />
        </Sidebar>
        <Button icon="pi pi-arrow-right" onClick={() => setVisible(true)} />
      </div>
    </div>
  )
}

export default SidebarNav