import React, { useState } from 'react'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import "../../assets/CSS/Admin/AdminDev.css"
import AddDev from '../Forms/AddDev.jsx';

function UserDevContent() {
    const [formVisible, setFormVisible] = useState(false)

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
    return (
        <div className="candidate-container">
            <div className={"form-data " + formVisible}>
                <div className="icon-container">
                    <i className='plus-btn pi pi-plus' onClick={() => setFormVisible(true)}></i>
                </div>
                <div className="card flex justify-content-center card-container">
                    <Card title="Title" subTitle="Subtitle" footer={footer} header={header} className="md:w-25rem">
                        <p className="m-0 card-content">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                        </p>
                    </Card>
                </div>
            </div>
            <div className="">
                {formVisible && <AddDev visible={formVisible} setVisible={setFormVisible} />}
            </div>
        </div>
    )
}

export default UserDevContent