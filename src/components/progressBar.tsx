import React, { useState, useEffect } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressBarCadastro({ currentStep, totalSteps }: ProgressBarProps) {
  const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <Box sx={{ width: '100%', mt: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
  <LinearProgress
    variant="determinate"
    value={progress}
    sx={{
      flex: 1, 
      height: 5, 
      borderRadius: 5,
      backgroundColor: '#B6E9B1',
       '& .MuiLinearProgress-bar': {
      backgroundColor: '#63ad66ff', // verde, por exemplo
    }
    }}
  />
  <Typography variant="body1"  sx={{
      minWidth: 40,
      textAlign: 'right',
      fontFamily: '"Arial", sans-serif',
      fontWeight: 500,
      color: '#777777ff', // preto mais suave
      userSelect: 'none',
    }}>
    {progress}%
  </Typography>
</Box>

  );
}
