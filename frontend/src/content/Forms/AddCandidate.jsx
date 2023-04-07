import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import axios from 'axios'
import "../../assets/CSS/HR/CandidateContent.css"

function AddCandidate(props) {
    const{visible, setVisible} = props
    const [candidateForm, setCandidateForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        role: "",
        jobtype: "",
        phone: "",
        skills: "",
        experience: "",
        current: "",
        expected: "",
        resume: "",
        pan: "",
    })

    const handlePopup = (e) => {
        e.preventDefault();
        setVisible(false)
    }
    const handleInputChange = (e) => {
        setCandidateForm({...candidateForm, [e.target.name]: e.target.value})
    }
    const handleSubmit = () => {
        axios.post(`http://localhost:8000/candidate`, candidateForm).then((candidate) => {
            console.log("data added");
            setVisible(false)
        })
    }

    return (
        <div className='candidate-form-container'>
            <p className='cross-container'  onClick={(e) => handlePopup(e)}><i className='cross pi pi-times'></i></p>
            <form action="" className='candidate-form'>
                <div className="name">
                    <input placeholder='First Name' className='input field-name' type="text" name="firstName" value={candidateForm.firstName} onChange={(e) => handleInputChange(e)}/>
                    <input placeholder='Last Name' className='input field-name' type="text" name='lastName' value={candidateForm.lastName} onChange={(e) => handleInputChange(e)}/>
                </div>
                <div className="email">
                    <input placeholder='Email' className='input field-email' type="text" name="email" value={candidateForm.email} onChange={(e) => handleInputChange(e)}/>
                </div>
                <div className="contact">
                    <input placeholder='Contact' className='input field-contact' type="text" name="phone" value={candidateForm.phone} onChange={(e) => handleInputChange(e)}/>
                </div>
                <div className="role">
                    <input placeholder='Role' className='input field-role' type="text" name="role" value={candidateForm.role} onChange={(e) => handleInputChange(e)}/>
                </div>
                <div className="job-type">
                    <input placeholder='Job-type' className='input field-role' type="text" name="jobtype" value={candidateForm.jobtype} onChange={(e) => handleInputChange(e)}/>
                </div>
                <div className="skills-experience">
                    <input placeholder='Skills' className='input field-skills-expe' type="text" name='skills' value={candidateForm.skills} onChange={(e) => handleInputChange(e)}/>
                    <input placeholder='Experience' className='input field-skills-expe' type="text" name='experience' value={candidateForm.experience} onChange={(e) => handleInputChange(e)}/>
                </div>
                <div className="CTC">
                    <input placeholder='Current CTC' className='input field-CTC' type="text" name='current' value={candidateForm.current} onChange={(e) => handleInputChange(e)}/>
                    <input placeholder='Expected CTC' className='input field-CTC' type="text" name='expected' value={candidateForm.expected} onChange={(e) => handleInputChange(e)} />
                </div>
                <div className="resume">
                    <input placeholder='Resume' className='input field-resume' type="text" name="resume" value={candidateForm.resume} onChange={(e) => handleInputChange(e)}/>
                </div>
                <div className="pan">
                    <input placeholder='PAN number' className='input field-pan' type="text" name='pan' value={candidateForm.pan} onChange={(e) => handleInputChange(e)}/>
                </div>
                <div className="btn">
                    <Button type='button' label="Submit" onClick={handleSubmit}/>
                    <Button label="Clear" />
                </div>
            </form>
        </div>
    )
}

export default AddCandidate