import React, { useState, useEffect } from 'react'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import axios from "axios";
import "../../assets/CSS/HR/CandidateContent.css"
import AddCandidate from '../Forms/AddCandidate';

function CandidateContent() {
    const [formVisible, setFormVisible] = useState(false)
    const [displayCandidate, setDisplayCandidate] = useState([])

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
        axios.get(`http://localhost:8000/candidate`).then((response) => {
            setDisplayCandidate(candidates => response.data)
        })
    }, [])


    return (
        <div className="">
            <div className={"form-data " + formVisible}>
                <div className="icon-container">
                    <i className='plus-btn pi pi-plus' onClick={() => setFormVisible(true)}></i>
                </div>
            </div>
            <div className="candidate-container">

                {
                    displayCandidate.map((candidate) => {
                        return (
                            <div>
                                <div className={"form-data " + formVisible}>
                                    <div className="card flex justify-content-center card-container">
                                        <Card title={candidate.firstName} subTitle={candidate.role} footer={footer} header={header} className="md:w-25rem">
                                            <p className="m-0 card-content">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                                                numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                                            </p>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <div className="">
                    {formVisible && <AddCandidate visible={formVisible} setVisible={setFormVisible} />}
                </div>
            </div>
        </div>
    )
}

export default CandidateContent