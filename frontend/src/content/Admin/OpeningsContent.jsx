import React, { useState } from 'react'
import { Card } from 'primereact/card';
import AddOpenings from '../Forms/AddOpenings';
import "../../assets/CSS/Admin/OpeningsContent.css"

function OpeningsContent() {
    const [formVisible, setFormVisible] = useState(false)
    return (
        <div>
            <div className="">
                <div className="icon-container">
                    <i className='plus-btn pi pi-plus' onClick={() => setFormVisible(true)}></i>
                </div>
                <div className="card job-container">
                    <Card title="Title">
                        <p className="m-0 job-content">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                        </p>
                    </Card>
                </div>
            </div>
            <div className="">
                {formVisible && <AddOpenings visible={formVisible} setVisible={setFormVisible} />}
            </div>
        </div>
    )
}

export default OpeningsContent