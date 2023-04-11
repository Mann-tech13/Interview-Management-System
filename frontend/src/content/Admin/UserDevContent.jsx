import React, { useEffect, useState } from 'react'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import axios from 'axios';
import "../../assets/CSS/Admin/AdminDev.css"
import AddDev from '../Forms/AddDev';


function UserDevContent() {
    const [formVisible, setFormVisible] = useState(false)
    const [displaydeveloper, setDisplayDevelopoer] = useState([]);


    const header = (
        <div>
            <p className='cross-container'><i className='cross pi pi-times'></i></p>
            <div><img className="profile-img" alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" /></div>
        </div>
    );
    const footer = (
        <div className="flex flex-wrap justify-content-end gap-2 edit-btn">
            <Button label="Edit" />
        </div>
    );

    useEffect(() => {
        axios.get('http://localhost:8082/developer').then((response) => {
            console.log(response.data);
            setDisplayDevelopoer(developer => response.data)
            console.log(displaydeveloper);
        })
    }, [formVisible])

    return (
        <div className="">
            <div className={"form-data " + formVisible}>
                <div className="icon-container">
                    <i className='plus-btn pi pi-plus' onClick={() => setFormVisible(true)}></i>
                </div>
            </div>
            <div className='developer-container'>
                {
                    displaydeveloper.map((displaydeveloper) => {
                        return (
                            <div>
                                <div className={"form-data " + formVisible}>
                                    <div className="card flex justify-content-center card-container">
                                        <Card title={displaydeveloper.firstName} subTitle={displaydeveloper.email} footer={footer} header={header} className="md:w-25rem">
                                            <p className="m-0 content">
                                            </p>
                                        </Card>
                                    </div>
                                </div>
                              
                            </div>
                        )
                    })
                }

                <div className="">
                    {formVisible && <AddDev visible={formVisible} setVisible={setFormVisible} />}
                </div>
            </div>
        </div>
    )

}
export default UserDevContent