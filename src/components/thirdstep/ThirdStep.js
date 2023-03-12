
import React from 'react'
import { useContext } from 'react'
import { multiStepContext } from '../../StepContext'
import { Button } from '@mui/material'

const ThirdStep = (props) => {

  const { finalData } = useContext(multiStepContext)
  const { setStep, userData, setUserData, submitData } = useContext(multiStepContext);

  const handleClick = () =>{
  setStep(2)
  }

  return (
    <div>
      <h1>Thank you ! Data Added Successfully</h1>
      <Button onClick={handleClick} >Back</Button>
    </div>
  )
}

export default ThirdStep

// export default ThirdStep