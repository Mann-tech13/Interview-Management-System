import React from 'react'
import { Button } from 'primereact/button';
import "../../assets/CSS/HR/InterviewContent.css"

function ScheduleInterview(props) {
  const{visible, setVisible} = props
    const handlePopup = (e) => {
        e.preventDefault();
        setVisible(false)
    }
  return (
    <div>
      <div className='interview-form-container'>
            <p className='cross-container'  onClick={(e) => handlePopup(e)}><i className='cross pi pi-times'></i></p>
            <form action="" className='candidate-form'>
                <div className="name">
                    <input placeholder='Name' className='input' type="text" name="Name" />
                </div>
                <div className="role">
                    <input placeholder='Role' className='input' type="text" name="role" />
                </div>
                <div className="exp-date">
                    <input placeholder='Experience' className='input field-exp-date' type="text" name='experience' />
                    <input placeholder='Date' className='input field-exp-date' type="text" name='skills' />
                </div>
                <div className="time">
                    <input placeholder='Start Time' className='input field-time' type="text" name='start-time' />
                    <input placeholder='End Time' className='input field-time' type="text" name='end-time' />
                </div>
                <div className="developer">
                    <input placeholder='Developer' className='input field-dev' type="text" name="developer" />
                </div>
                <div className="rounds">
                    <input placeholder='Number of Rounds' className='input field-rounds' type="text" name="rounds" />
                </div>
                <div className="btn">
                    <Button label="Schedule" />
                </div>
            </form>
            </div>
    </div>
  )
}

export default ScheduleInterview