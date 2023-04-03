import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import "../../assets/CSS/HR/CandidateContent.css"

function AddCandidate(props) {
    const{visible, setVisible} = props
    const handlePopup = (e) => {
        e.preventDefault();
        setVisible(false)
    }

    return (
        <div className='candidate-form-container'>
            <p className='cross-container'  onClick={(e) => handlePopup(e)}><i className='cross pi pi-times'></i></p>
            <form action="" className='candidate-form'>
                <div className="name">
                    <input placeholder='First Name' className='input field-name' type="text" name="firstName" />
                    <input placeholder='Last Name' className='input field-name' type="text" name='lastName' />
                </div>
                <div className="email">
                    <input placeholder='Email' className='input field-email' type="text" name="email" />
                </div>
                <div className="contact">
                    <input placeholder='Contact' className='input field-contact' type="text" name="phone" />
                </div>
                <div className="skills-experience">
                    <input placeholder='Skills' className='input field-skills-experience' type="text" name='skills' />
                    <input placeholder='Experience' className='input field-skills-experience' type="text" name='experience' />
                </div>
                <div className="CTC">
                    <input placeholder='Current CTC' className='input field-CTC' type="text" name='current' />
                    <input placeholder='Expected CTC' className='input field-CTC' type="text" name='expected' />
                </div>
                <div className="resume">
                    <input placeholder='Resume' className='input field-resume' type="text" name="resume" />
                </div>
                <div className="pan">
                    <input placeholder='PAN number' className='input field-pan' type="text" name='pan' />
                </div>
                <div className="btn">
                    {/* <input className='field-btn submit-btn' type="submit" value="submit" />
                    <input className='field-btn clear-btn' type="button" value="clear" /> */}
                    <Button label="Submit" />
                    <Button label="Clear" />
                </div>
            </form>
        </div>
    )
}

export default AddCandidate