import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import "../../assets/CSS/HR/OpeningsContent.css"

function AddOpenings(props) {
    const{visible, setVisible} = props
    const handlePopup = (e) => {
        e.preventDefault();
        setVisible(false)
    }
  return (
    <div>
        <div className='openings-form-container'>
            <p className='cross-container'  onClick={(e) => handlePopup(e)}><i className='cross pi pi-times'></i></p>
            <form action="" className='candidate-form'>
                <div className="job">
                    <input placeholder='Job' className='open field-job' type="text" name="job" />
                </div>
                <div className="job-desc">
                    <input placeholder='Job description' className='open field-job-desc' type="text" name="job-desc" />
                </div>
                <div className="skills-exp">
                    <input placeholder='Skills' className='open field-skills-exp' type="text" name='skills' />
                    <input placeholder='Experience' className='open field-skills-exp' type="text" name='experience' />
                </div>
                <div className="vacancy-loc">
                    <input placeholder='Vacancy' className='open field-vacancy' type="text" name='vacancy' />
                    <input placeholder='Location' className='open field-location' type="text" name='location' />
                </div>
                <div className="rounds">
                    <input placeholder='rounds' className='open field-rounds' type="text" name="rounds" />
                </div>
                <div className="job-type">
                    <input placeholder='Select Job-Type' className='open field-job-type' type="text" name='job-type' />
                </div>
                <div className="open-btn">
                    {/* <input className='field-btn submit-btn' type="submit" value="submit" />
                    <input className='field-btn clear-btn' type="button" value="clear" /> */}
                    <Button label="Create" />
                    <Button label="Clear" />
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddOpenings