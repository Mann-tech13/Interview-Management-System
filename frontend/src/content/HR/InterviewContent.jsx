import React, { useState } from 'react'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import "../../assets/CSS/HR/InterviewContent.css"
import AddCandidate from '../Forms/ScheduleInterview';
import ScheduleInterview from '../Forms/ScheduleInterview';

function InterviewContent() {
    const [formVisible, setFormVisible] = useState(false)

    const header = (
        <div>
            <div><img className="profile-img-inter" alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" /></div>
        </div>
    );
    const footer = () => (
        <div className="flex flex-wrap justify-content-end gap-2 edit-btn">
            <Button label="Schedule Interview" onClick={() => setFormVisible(true)}/>
        </div>
    );
    return (
        <div>
            <div className={"form-data "+formVisible}>
                <div className="card flex justify-content-center card-container">
                    <Card title="Title" subTitle="Subtitle" footer={footer} header={header} className="md:w-25rem">
                        <p className="m-0 inter-content">
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

export default InterviewContent