import React, { useState, useEffect } from 'react'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import axios from "axios";
import BlockCandidate from "../Forms/BlockCandidate"
import "../../assets/CSS/HR/BlockContent.css"

function BlockContent() {
    const [formVisible, setFormVisible] = useState(false)
    const [blockCandidate, setBlockCandidate] = useState([])
    const [uniqueId, setUniqueId] = useState(0)
    const [deleteAPI, setDeleteAPI] = useState(false)

    const handleEdit = (e) => {
        setUniqueId(e)
        setFormVisible(true)
    }
    const handleDeleteCandidate = (e) => {
        axios.delete(`http://localhost:8000/blocked/${e}`).then((response) => {
            setDeleteAPI(e)
        })
    }

    const header = (e) => (
        <div>
            <p onClick={() => handleDeleteCandidate(e)} className='cross-container'><i className='cross pi pi-times'></i></p>
            <div><img className="profile-img" alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" /></div>
        </div>
    );
    const footer = (e) => (
        <div className="flex flex-wrap justify-content-end gap-2 edit-btn">
            <Button label="Edit" onClick={() => handleEdit(e)} />
        </div>
    );

    useEffect(() => {
        axios.get(`http://localhost:8000/blocked`).then((response) => {
            console.log(response);
            setBlockCandidate(candidates => response.data)
        })
    }, [formVisible, deleteAPI])

    return (
        <div>
            <div className={"form-data " + formVisible}>
                <div className="icon-container">
                    <i className='plus-btn pi pi-plus' onClick={() => setFormVisible(true)}></i>
                </div>
                {/* <div className="card flex justify-content-center card-container">
                    <Card title="Title" subTitle="Subtitle" footer={footer} header={header} className="md:w-25rem">
                        <p className="m-0 card-content">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                        </p>
                    </Card>
                </div> */}
                <div className='block-container'>
                    {
                        blockCandidate.map((blocked) => {
                            return (
                                <div className={"form-data " + formVisible}>
                                    <div className="card flex justify-content-center card-container">
                                        <Card title="Title" subTitle="Subtitle" footer={footer} header={header} className="md:w-25rem">
                                            <p className="m-0 card-content">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                                                numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                                            </p>
                                        </Card>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="">
                {formVisible && <BlockCandidate visible={formVisible} setVisible={setFormVisible} uniqueId={uniqueId} setUniqueId={setUniqueId} />}
            </div>
        </div>
    )
}

export default BlockContent