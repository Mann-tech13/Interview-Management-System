import React from 'react'
import { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import "../../assets/CSS/Admin/AdminDev.css"
import axios from 'axios';

function AddDev(props) {
    const { visible, setVisible } = props
    const [developerform, setDevelopoerForm] = useState({
        firstName: "",
        lastName: "",
        designation: "",
        experience: "",
        email: "",
        phoneNo: "",
        flag: "",
    })

    const handlePopup = (e) => {
        e.preventDefault();
        setVisible(false)
    }

    const handleinputChange = (e) => {
        setDevelopoerForm({ ...developerform, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        console.log("test")
        axios.post(`http://localhost:8082/developer`, developerform).then((developer) => {
            console.log("developer Added");
            setVisible(false)
        }).catch((err) => {
            console.log(developerform);
        })
    }

    return (

        <div className='developer-form-container'>
             <center><i><h1>Developer Form</h1></i></center>
            <p className='cross-container' onClick={(e) => handlePopup(e)}><i className='cross pi pi-times'></i></p>
            <form action="" className='developer-form'>
                <div className="name">
                  <b><input placeholder='First Name' className='input field-name' type="text" name="firstName" value={developerform.firstName} onChange={(e) => handleinputChange(e)} /></b>
                    <input placeholder='Last Name' className='input field-name' type="text" name='lastName' value={developerform.lastName} onChange={(e) => handleinputChange(e)} />
                </div>
                <div className="designation">
                    <input placeholder='designation' className='input field-designation' type="text" name="designation" value={developerform.designation} onChange={(e) => handleinputChange(e)} />
                </div>
                <div className="experience">
                    <input placeholder='experience' className='input field-experience' type="text" name="experience" value={developerform.experience} onChange={(e) => handleinputChange(e)} />
                </div>
                <div className="email">
                    <input placeholder='email' className='input field-email' type="text" name="email" value={developerform.email} onChange={(e) => handleinputChange(e)} />
                </div>
                <div className="phoneNo">
                    <input placeholder='phoneNo' className='input field-phoneNo-' type="text" name='phoneNo' value={developerform.phoneNo} onChange={(e) => handleinputChange(e)} />
                    <input placeholder='flag' className='input field-flag' type="text" name='flag' value={developerform.flag} onChange={(e) => handleinputChange(e)} />
                </div>
                <div className="btn">
                    <Button type='button' label="Submit" onClick={handleSubmit} />
                    <Button label="Clear" />
                </div>
            </form>
        </div>

    )
}


export default AddDev