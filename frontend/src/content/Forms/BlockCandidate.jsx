import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';

function BlockCandidate(props) {
    const { visible, setVisible } = props
    const handlePopup = (e) => {
        e.preventDefault();
        setVisible(false)
    }
    return (
        <div>
            <div className='block-form-container'>
                <p className='cross-container' onClick={(e) => handlePopup(e)}><i className='cross pi pi-times'></i></p>
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
                    <div className="pan">
                        <input placeholder='PAN number' className='input field-pan' type="text" name='pan' />
                    </div>
                    <div className="createdby">
                        <input placeholder='Created By' className='input field-created' type="text" name='created' />
                    </div>
                    <div className="btn">
                        {/* <input className='field-btn submit-btn' type="submit" value="submit" />
                    <input className='field-btn clear-btn' type="button" value="clear" /> */}
                        <Button label="Block" />
                        <Button label="Clear" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default BlockCandidate