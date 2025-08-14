import React from 'react';
import { styled } from '@mui/material/styles';
import { Switch, FormControlLabel } from '@mui/material';

type Props = {
  estaLigado: boolean;
  setEstaLigado: (estado: boolean) => void;
};


const IOSSwitch = styled((props: any) => <Switch disableRipple {...props} />)(({ theme }) => ({
  width: 36,
  height: 20,
  padding: 0,
  display: 'flex',
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#4caf50',
        opacity: 1,
        border: 0,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 16,
    height: 16,
    borderRadius: 11,
    backgroundColor: '#fff',
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 13,
    backgroundColor: '#aab4be',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

export default function SwitchAtivoDesativado({ estaLigado, setEstaLigado }: Props) {
  const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEstaLigado(event.target.checked);
  };

  return (
    <FormControlLabel
      sx={{ width: '220px', height: '40px',
          margin: '0px', 
          '.MuiFormControlLabel-label': {
          paddingLeft: '12px',   
    },}}
      control={<IOSSwitch checked={estaLigado} onChange={handleToggle} />}
      label={estaLigado ? 'Ativar ao criar' : 'Desativado'}
    />
  );
}
