
import './App.css';
import FirstStep from './components/firststep/FirstStep';
import SecondStep from './components/secondstep/SecondStep';
import ThirdStep from './components/thirdstep/ThirdStep';
import { multiStepContext } from './StepContext';
import { Stepper, StepLabel, Step } from '@mui/material';
import Box from '@mui/material/Box';
import { useContext,useState } from 'react';

const steps = [
  'USER INFORMATION',
  'ADDRESS DETAILS',
  'Thank You',
];


function App() {

  const {currentStep, finalData} = useContext(multiStepContext);
  const [formData, setFormData] = useState({
    step1Data: {},
    step2Data: {}
  });

 function showStep(step){
  switch(step){
    case 1:
      return <FirstStep setFormData={setFormData} />

      case 2:
      return <SecondStep setFormData={setFormData} />

      case 3:
      return <ThirdStep formData={formData} />
  }
 }

  return (
    <div className="App">
      <header className="App-header">

      <Box sx={{ width: '100%' }}>
      <Stepper activeStep={currentStep-1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
      </header>

      {showStep(currentStep)}
    </div>
  );
}

export default App;
