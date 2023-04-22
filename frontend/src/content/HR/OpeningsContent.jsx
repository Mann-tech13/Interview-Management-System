import React, { useState, useEffect } from 'react'
import { Card } from 'primereact/card';
import AddOpenings from '../Forms/AddOpenings';
import "../../assets/CSS/HR/OpeningsContent.css"
import axios from "axios"

function OpeningsContent() {
    const [formVisible, setFormVisible] = useState(false)
    const [displayOpenings, setDisplayOpenings] = useState([])
    const [deleteAPI, setDeleteAPI] = useState(false)

    const handleDelete = (e) => {
        console.log(e);
        axios.delete(`http://localhost:8000/openings/${e}`).then((response) => {
            setDeleteAPI(e)
        })
    }

    const header = (e) => (
        <div className='icon-holder'>
            <i className='icon pi pi-pencil pencil'></i>
            <i className='icon pi pi-times times' onClick={() => handleDelete(e)}></i>
        </div>
    )

    useEffect(() => {
        axios.get(`http://localhost:8000/openings`).then((response) => {
            setDisplayOpenings(openings => response.data)
        })
    }, [deleteAPI])


    return (
        <div>
            <div className="">
                <div className="icon-container">
                    <i className='plus-btn pi pi-plus' onClick={() => setFormVisible(true)}></i>
                </div>
                {
                    displayOpenings.map((openings) => {
                        return (
                            <div className="card openings-container">
                                <Card header={() => header(openings.jobID)} title={openings.job} >
                                    <p className="m-0 content">
                                        {openings.jobDescription}
                                    </p>
                                </Card>
                            </div>
                        )
                    })
                }

            </div>
            <div className="">
                {formVisible && <AddOpenings visible={formVisible} setVisible={setFormVisible} />}
            </div>
        </div>
    )
}

export default OpeningsContent