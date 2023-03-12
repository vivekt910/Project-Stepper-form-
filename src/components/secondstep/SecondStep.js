
import React from 'react'
import { Button, TextField } from '@mui/material'
import { multiStepContext } from '../../StepContext';
import "./secondstep.scss"
import { useContext } from 'react'
import { useFormik } from 'formik';
import { initialValues as ans} from '../firststep/FirstStep';

// const initialValues = initialValues
const initialValues = {
    address: "",
    city : "",
    state : "",
    country : ""
}

const SecondStep = () => {

    const { setStep, userData, setUserData, submitData } = useContext(multiStepContext);
    const {values, errors, handleChange, handleSubmit, handleBlur} = useFormik({
        initialValues : initialValues,
        onSubmit : (values) =>{

        console.log(userData)
        }
    })

    const submitHandler1 = () => {
      console.log(userData)
        setStep(3);
    }
    return (
        <div className='secondStep' >
            <div className="container">

                <div className="top">

                </div>

                <div className="bottom">
                    <form onSubmit={submitHandler1} >
                        <div className="formInput">

                            <TextField id="outlined-basic" name='address' label="Address Line 1" variant="outlined" value={userData['addressline1']} onChange={handleChange} className='input'  />
                            <TextField id="outlined-basic" name='city' label="City" variant="outlined" value={userData['addressline2']} onChange={handleChange} className='input' />
                            <TextField id="outlined-basic" name='state' label="State" variant="outlined" value={userData['addressline2']} onChange={handleChange}  className='input' />
                            <TextField id="outlined-basic" name='country' label="Country" variant="outlined" value={userData['addressline2']} onChange={handleChange} className='input' />

                        </div>

                        <Button variant="contained" onClick={() => {
                            setStep(1);
                            console.log(userData)
                        }} >Back</Button>
                        <Button variant="contained" type='submit' onClick={submitHandler1} >Next</Button>
                    </form>
                </div>
            </div>


        </div>
    )
}

export default SecondStep

// onClick={() => {
//     handleSubmit()
//     // setStep(3);
    
// }}