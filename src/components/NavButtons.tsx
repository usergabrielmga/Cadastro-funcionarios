// src/components/NavButtons.tsx
import React from 'react';
import { Button, Box } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';

interface NavButtonsProps {
  isTabela?: boolean;
}

export default function NavButtons({ isTabela = false }: NavButtonsProps) {
  const location = useLocation();

  const getButtonColor = (path: string): string => {
    return location.pathname === path ? 'black' : 'gray';
  };

  return (
    <Box
      sx={{
        display: isTabela ? 'flex' : 'block',
        justifyContent: isTabela ? 'space-between' : 'initial',
        width: isTabela ? '1000px' : 'auto',
        margin: isTabela ? '0 auto 20px' : 'initial', // centralizar horizontalmente com margem inferior
        gap: isTabela ? 2 : 0,  // espaçamento entre botões quando em flex
        position: isTabela ? 'absolute' : 'initial', 
        marginTop: isTabela ? '-90px' : 'initial',
      }}
    >
      <Button 
        color="primary"
        component={RouterLink}
        to="/colaboradores"
        sx={{
          color: location.pathname === '/colaboradores' ? 'black' : 'gray',
          fontSize: location.pathname === '/colaboradores' ? '22px' : 'initial',
          fontWeight: location.pathname === '/colaboradores' ? 'bold' : 'initial',
          textTransform: 'none',
          backgroundColor: 'transparent',
          border: 'none',
          fontFamily: 'inter' 
        }}
      >
        Colaboradores
      </Button>
      <Button
        color="primary"
        component={RouterLink}
        to="/cadastrar-colaborador"
        sx={{
          color: location.pathname === '/cadastrar-colaborador' ? 'black' : 'white',
          backgroundColor: location.pathname === '/cadastrar-colaborador' ? 'initial' : '#4caf50',
          width: location.pathname === '/cadastrar-colaborador' ? 'initial' : '170px',
          height: location.pathname === '/cadastrar-colaborador' ? 'initial' : '50px',
          borderRadius: location.pathname === '/cadastrar-colaborador' ? 'initial' : '10px',
          textTransform: 'none',
          border: 'none',
          fontFamily: 'inter'       }}
      >
        {location.pathname === '/cadastrar-colaborador' ? 'Cadastrar Colaborador' : 'Novo Colaborador'}
        
      </Button>
    </Box>
  );
}
