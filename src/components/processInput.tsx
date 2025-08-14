import React from 'react';
import { Box, Stepper, Step, StepLabel, StepConnector } from '@mui/material';
import { styled } from '@mui/material/styles';

// StepConnector customizado para alterar a linha vertical
const CustomStepConnector = styled(StepConnector)(({ theme }) => ({
  
  '& .MuiStepConnector-line': {
    borderColor: '#A7A7A7',      // cor da linha
    borderLeftWidth: 2,      // espessura da linha vertical
    minHeight: 90,           // altura da linha entre passos
  },
 
    
}));

interface ProcessInputProps {
  currentStep: number;
}

function ProcessInput({ currentStep }: ProcessInputProps) {
  const steps = ['Infos Básicas', 'Infos Profissionais'];

  return (
    <Box sx={{ width: '200px', marginTop: '30px' }}>
      <Stepper
        activeStep={currentStep - 1}
        orientation="vertical"
        connector={<CustomStepConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel sx={{
              '& .MuiStepLabel-label': {
                fontFamily: 'Arial, sans-serif',
                fontWeight: 'bold',
                color: '#3a3838ff'
              },
              '& .MuiStepIcon-root.Mui-active': {
                  color: 'gray', // Cor do passo ativo
                },
                '& .MuiStepIcon-root.Mui-completed': {
                  color: '#4caf50', // Cor desejada para o ícone completo
                },
              }}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default ProcessInput;
