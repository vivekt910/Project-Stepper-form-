
import React from 'react';
import { useState, useContext } from 'react';
import { Button, TextField } from '@mui/material'
import { Radio, FormControlLabel, RadioGroup, FormLabel } from '@mui/material';

import { useFormik } from 'formik';

import "./firststep.scss"
import { multiStepContext } from '../../StepContext';
import { signUpSchema } from '../../schemas';


const initialValues = {
    firstname: "",
    middlename: "",
    lastname: "",
    mobileno: "",
    email: "",
    birthday: "",
    age: "",
    bloodgroup: "",
    height: "",
    weight: "",
    gender: "",
    maritalstatus: "",
}


const FirstStep = (props) => {


    const { setStep, userData, setUserData } = useContext(multiStepContext);

    const { values, errors, touched, handleChange, handleSubmit, handleBlur } = useFormik({
        initialValues: initialValues,

        validationSchema : signUpSchema,
        onSubmit: (values) => {

            console.log(values)
        }
    })

    const submitHandler = () => {
        setStep(2);
    }
    console.log(errors)

    return (

        <div className='firstStep' >
            <div className="container">
                <div className="bottom">
                    <form >
                        <div className="formInput">

                            <TextField id="outlined-basic" name="firstname" label="First name" variant="outlined" value={values.firstname} onChange={handleChange} onBlur={handleBlur} className='input' />
                           { errors.name && touched.name ? (<p className='form-error' >{errors.name}</p>) : null}
                            <TextField id="outlined-basic" name="middlename" label="Middle name" variant="outlined" value={values.middletname} onChange={handleChange} onBlur={handleBlur} className='input' />
                            { errors.name && touched.name ? (<p className='form-error' >{errors.name}</p>) : null}
                            <TextField id="outlined-basic" name="lastname" label="Last name" variant="outlined" value={values.lastname} onChange={handleChange} onBlur={handleBlur} className='input' />
                            { errors.name && touched.name ? (<p className='form-error' >{errors.name}</p>) : null}
                            <TextField id="outlined-basic" name="mobileno" label="Mobile no." variant="outlined" value={values.mobileno} onChange={handleChange} onBlur={handleBlur} className='input' />
                            { errors.name && touched.name ? (<p className='form-error' >{errors.name}</p>) : null}
                            <TextField id="outlined-basic" name="email" label="E-mail" variant="outlined" value={values.email} onChange={handleChange} onBlur={handleBlur} className='input' />
                            { errors.name && touched.name ? (<p className='form-error' >{errors.name}</p>) : null}


                            <TextField type="date" name='birthday' id="outlined-basic" label="Birthday" variant="outlined" value={values.birthday} onChange={handleChange} onBlur={handleBlur} className='input' />
                            { errors.name && touched.name ? (<p className='form-error' >{errors.name}</p>) : null}


                            <TextField id="outlined-basic" name="age" label="Age" variant="outlined" value={values.age} onChange={handleChange} onBlur={handleBlur} className='input' />
                            { errors.name && touched.name ? (<p className='form-error' >{errors.name}</p>) : null}
                            <TextField id="outlined-basic" name="bloodgroup" label="Blood group" variant="outlined" value={values.bloodgroup} onChange={handleChange} onBlur={handleBlur} className='input' />
                            { errors.name && touched.name ? (<p className='form-error' >{errors.name}</p>) : null}
                            <TextField id="outlined-basic" name="height" label="Height" variant="outlined" value={values.height} onChange={handleChange} onBlur={handleBlur} className='input' />
                            { errors.name && touched.name ? (<p className='form-error' >{errors.name}</p>) : null}
                            <TextField id="outlined-basic" name="weight" label="Weight" variant="outlined" value={values.weight} onChange={handleChange} onBlur={handleBlur} className='input' />


                            <FormLabel id="gender" name="gender" className='input' value={values.gender} onChange={handleChange} onBlur={handleBlur}>Gender
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />

                                </RadioGroup>
                            </FormLabel>

                            <FormLabel id="maritalStatus" name="maritalstatus" className='input' value={values.maritalstatus} onChange={handleChange} onBlur={handleBlur}
                            >Marital Status
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel value="single" control={<Radio />} label="Single" />
                                    <FormControlLabel value="married" control={<Radio />} label="Married" />
                                    <FormControlLabel value="divorced" control={<Radio />} label="Divorced" />
                                    <FormControlLabel value="widowed" control={<Radio />} label="Widowed" />

                                </RadioGroup>
                            </FormLabel>
                        </div>
                        <Button variant="contained" className="btn" disabled={true} >Back</Button>
                        <Button variant="contained" className="btn" onClick={submitHandler} >Next</Button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default FirstStep;
export { initialValues }