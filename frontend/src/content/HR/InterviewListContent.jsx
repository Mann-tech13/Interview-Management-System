import React, { useState } from 'react'
import { Card } from 'primereact/card';
import "../../assets/CSS/HR/InterviewList.css"
import ScheduleInterview from '../Forms/ScheduleInterview';

function InterviewListContent() {
    const [formVisible, setFormVisible] = useState(false)
    const header = (
        <div className='icon-holder'>
            <i className='icon pi pi-pencil pencil'></i>
            <i className='icon pi pi-times times'></i>
        </div>
    )
    return (
        <div>
            <div className="">
                <div className="card interview-list-container">
                    <Card header={header} title="Title">
                        <p className="m-0 content">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                        </p>
                    </Card>
                </div>
            </div>
            <div className="">
                {formVisible && <ScheduleInterview visible={formVisible} setVisible={setFormVisible} />}
            </div>
        </div>
    )
}

export default InterviewListContent