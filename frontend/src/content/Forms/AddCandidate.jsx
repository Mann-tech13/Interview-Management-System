import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import axios from 'axios'
import "../../assets/CSS/HR/CandidateContent.css"

function AddCandidate(props) {
    const{visible, setVisible, uniqueId, setUniqueId} = props
    // console.log("*************");
    // console.log(visible);
    // console.log(setVisible);
    // console.log(setVisible);
    // console.log(setUniqueId);
    // console.log("*************");
    const [candidateForm, setCandidateForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        role: "",
        jobtype: "",
        phoneNo: "",
        skills: "",
        experience: "",
        currentctc: "",
        expectedctc: "",
        attachment: "",
        pan: "",
    })

    const handlePopup = (e) => {
        e.preventDefault();
        props.setVisible(false)
    }
    const handleInputChange = (e) => {
        setCandidateForm({...candidateForm, [e.target.name]: e.target.value})
    }
    const handleSubmit = () => {
        axios.post(`http://localhost:8000/candidate`, candidateForm).then((candidate) => {
            console.log("data added");
            props.setVisible(false)
        })
    }


    useEffect(() => {
        if(props.uniqueId !== 0){
            axios.get(`http://localhost:8000/candidate/${props.uniqueId}`).then((response) => {
                console.log(response.data);
                setCandidateForm(data => response.data)
            }) 
        }
      }, [])

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
                    <input placeholder='Contact' className='input field-contact' type="text" name="phoneNo" value={candidateForm.phoneNo} onChange={(e) => handleInputChange(e)}/>
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
                    <input placeholder='Current CTC' className='input field-CTC' type="text" name='currentctc' value={candidateForm.currentctc} onChange={(e) => handleInputChange(e)}/>
                    <input placeholder='Expected CTC' className='input field-CTC' type="text" name='expectedctc' value={candidateForm.expectedctc} onChange={(e) => handleInputChange(e)} />
                </div>
                <div className="resume">
                    <input placeholder='Resume' className='input field-resume' type="text" name="attachment" value={candidateForm.attachment} onChange={(e) => handleInputChange(e)}/>
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