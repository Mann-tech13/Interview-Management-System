import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import axios from 'axios'
import "../../assets/CSS/HR/OpeningsContent.css"

function AddOpenings(props) {
    const{visible, setVisible} = props
    const [openingsForm, setOpeningsForm] = useState({
        job: "",
        jobDescription: "",
        experience: "",
        vacancy: "",
        location: "",
        jobType: "",
        
    })
    const handlePopup = (e) => {
        e.preventDefault();
        setVisible(false)
    }
    const handleSubmit = () => {
        axios.post(`http://localhost:8000/openings`, openingsForm).then((response) => {
            setVisible(false)
        })
    }

    const handleInputChange = (e) => {
        setOpeningsForm({...openingsForm, [e.target.name]: e.target.value})
    }
    
  return (
    <div>
        <div className='openings-form-container'>
            <p className='cross-container'  onClick={(e) => handlePopup(e)}><i className='cross pi pi-times'></i></p>
            <form action="" className='candidate-form'>
                <div className="job">
                    <input placeholder='Job' className='open field-job' type="text" name="job"  onChange={(e) => handleInputChange(e)}/>
                </div>
                <div className="job-desc">
                    <input placeholder='Job description' className='open field-job-desc' type="text" name="jobDescription"  onChange={(e) => handleInputChange(e)}/>
                </div>
                <div className="exp">
                    <input placeholder='Experience' className='open field-exp' type="text" name='experience'  onChange={(e) => handleInputChange(e)}/>
                </div>
                <div className="vacancy-loc">
                    <input placeholder='Vacancy' className='open field-vacancy' type="text" name='vacancy'  onChange={(e) => handleInputChange(e)}/>
                    <input placeholder='Location' className='open field-location' type="text" name='location'  onChange={(e) => handleInputChange(e)}/>
                </div>
                <div className="rounds">
                    <input placeholder='rounds' className='open field-rounds' type="text" name="rounds"  onChange={(e) => handleInputChange(e)}/>
                </div>
                <div className="job-type">
                    <input placeholder='Select Job-Type' className='open field-job-type' type="text" name='job-type' onChange={(e) => handleInputChange(e)} />
                </div>
                <div className="open-btn">
                    <Button label="Create" type="button" onClick={handleSubmit} />
                    <Button label="Clear" />
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddOpenings