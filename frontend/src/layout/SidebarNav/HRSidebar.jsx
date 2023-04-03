import React, {useState} from 'react'
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

function HRSidebar() {
    const navigate = useNavigate("/");
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <div className="card flex justify-content-center">
                <Sidebar visible={visible} onHide={() => setVisible(false)}>
                    <p onClick={() => navigate("/hr")}>Home</p>
                    <p onClick={() => navigate("/candidates")}>Candidates</p>
                    <p onClick={() => navigate("/hropenings")}>Job Postings</p>
                    <p onClick={() => navigate("/interview")}>Interview Scheduling</p>
                    <p onClick={() => navigate("/myinterview")}>Interviews List</p>
                    <p onClick={() => navigate("/block")}>Block</p>
                </Sidebar>
                <Button icon="pi pi-arrow-right" onClick={() => setVisible(true)} />
            </div>
        </div>
    )
}

export default HRSidebar