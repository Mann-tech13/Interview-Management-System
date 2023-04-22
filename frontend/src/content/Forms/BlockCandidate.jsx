import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import axios from 'axios'
import "../../assets/CSS/HR/BlockContent.css"

function BlockCandidate(props) {
    const{visible, setVisible, uniqueId, setUniqueId} = props
    const [blockForm, setBlockForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contactNo: "",
        pan: ""
    })  
    const handlePopup = (e) => {
        e.preventDefault();
        setVisible(false)
    }
    const handleInputChange = (e) => {
        setBlockForm({...blockForm, [e.target.name]: e.target.value})
    }
    const handleSubmit = () => {
        axios.post(`http://localhost:8000/blocked`, blockForm).then((candidate) => {
            console.log("data added");
            props.setVisible(false)
        })
    }
    useEffect(() => {
        if(props.uniqueId !== 0){
            axios.get(`http://localhost:8000/blocked/${props.uniqueId}`).then((response) => {
                setBlockForm(data => response.data)
            }) 
        }
      }, [])
    return (
        <div>
            <div className='block-form-container'>
                <p className='cross-container' onClick={(e) => handlePopup(e)}><i className='cross pi pi-times'></i></p>
                <form action="" className='candidate-form'>
                    <div className="name">
                        <input placeholder='First Name' className='input field-name' type="text" name="firstName" onChange={(e) => handleInputChange(e)} />
                        <input placeholder='Last Name' className='input field-name' type="text" name='lastName' onChange={(e) => handleInputChange(e)} />
                    </div>
                    <div className="email">
                        <input placeholder='Email' className='input field-email' type="text" name="email" onChange={(e) => handleInputChange(e)} />
                    </div>
                    <div className="contact">
                        <input placeholder='Contact' className='input field-contact' type="text" name="contactNo" onChange={(e) => handleInputChange(e)} />
                    </div>
                    <div className="pan">
                        <input placeholder='PAN number' className='input field-pan' type="text" name='pan' onChange={(e) => handleInputChange(e)} />
                    </div>
                    <div className="btn">
                        <Button type='button' label="Block" onClick={handleSubmit} />
                        <Button label="Clear" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default BlockCandidate