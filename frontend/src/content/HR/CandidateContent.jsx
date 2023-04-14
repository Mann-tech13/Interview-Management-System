import React, { useState, useEffect } from 'react'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import axios from "axios";
import "../../assets/CSS/HR/CandidateContent.css"
import AddCandidate from '../Forms/AddCandidate';
import CandidateImg from "../../assets/Images/CandidateProfile.png"

function CandidateContent() {
    const [formVisible, setFormVisible] = useState(false)
    const [displayCandidate, setDisplayCandidate] = useState([])
    const [uniqueId, setUniqueId] = useState(0)
    const [deleteAPI, setDeleteAPI] = useState(false)

    const handleEdit = (e) => {
        setUniqueId(e)
        setFormVisible(true)
    }
    const handleDeleteCandidate = (e) => {
        axios.delete(`http://localhost:8000/candidate/${e}`).then((response) => {
            setDeleteAPI(e)
        })
    }

    const header = (e) => (
        <div>
            <p onClick={() => handleDeleteCandidate(e)} className='cross-container'><i className='cross pi pi-times'></i></p>
            <div><img className="profile-img" alt="Card" src={CandidateImg} /></div>
        </div>
    );
    const footer = (e) => (
        <div className="flex flex-wrap justify-content-end gap-2 edit-btn">
            <Button label="Edit" onClick={() => handleEdit(e)}/>
            
        </div>
    );

    useEffect(() => {
        axios.get(`http://localhost:8000/candidate`).then((response) => {
            console.log(response);
            setDisplayCandidate(candidates => response.data)
        })
    }, [formVisible, deleteAPI])


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
                                        <Card title={candidate.firstName} subTitle={candidate.role} footer={() => footer(candidate.candidateid)} header={() => header(candidate.candidateid)} className="md:w-25rem">
                                            <p className="m-0 card-content">
                                                Meeting Scheduled <br/> Interview Status
                                            </p>
                                            <p className="m-0 card-content">
                                                
                                            </p>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <div className="">
                    {formVisible && <AddCandidate visible={formVisible} setVisible={setFormVisible} uniqueId={uniqueId} setUniqueId={setUniqueId} />}
                </div>
            </div>
        </div>
    )
}

export default CandidateContent