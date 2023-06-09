import React, {useState} from 'react'
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

function DeveloperSidebar() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
        <div className="card flex justify-content-center">
                <Sidebar visible={visible} onHide={() => setVisible(false)}>
                    <h2>Sidebar</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </Sidebar>
                <Button icon="pi pi-arrow-right" onClick={() => setVisible(true)} />
            </div>
    </div>
  )
}

export default DeveloperSidebar