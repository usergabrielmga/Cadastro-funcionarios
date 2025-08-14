
import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";
import SwitchAtivoDesativado from "./SwitchAtivoDesativado";

type Step1Props = {
  handleBack: () => void;
  statusAtivo: boolean;
  setStatusAtivo: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Step1PersonalInfo({ handleBack, statusAtivo, setStatusAtivo }: Step1Props) {

  const {
    register,
    formState: { errors, isValid }
  } = useFormContext();

  return (
    <div style={{width: '100%', marginTop: '100px'}}>
      <Typography variant="h4" component="h4" color="#686767ff" sx={{marginTop: '100px', fontWeight: 'bold', fontSize: '24px'}}>
        Informações Básicas
      </Typography>
      
      <TextField color="success" sx={{
    '& .MuiOutlinedInput-root': {
      
      '&:hover fieldset': {
        borderColor: 'darkgreen',  // cor da borda ao passar o mouse
      },
      '&.Mui-focused fieldset': {
        borderColor: '#4caf50',    // cor da borda quando o input está focado
      },
      
    },
  }} label="Nome" {...register("nome", { required: "Campo obrigatório" })} error={!!errors.nome} helperText={typeof errors.nome?.message === "string" ? errors.nome?.message : ""} fullWidth margin="normal" />
      
      <TextField  color="success"  sx={{
    '& .MuiOutlinedInput-root': {
      
      '&:hover fieldset': {
        borderColor: 'darkgreen',  // cor da borda ao passar o mouse
      },
      '&.Mui-focused fieldset': {
        borderColor: '#4caf50',    // cor da borda quando o input está focado
      },
      
    },
  }}  label="Email" {...register("email", { required: "Campo obrigatório" })} error={!!errors.email} helperText={typeof errors.email?.message === "string" ? errors.email?.message : ""} fullWidth margin="normal" />

    
      <Box sx={{ mt: 2 }}>
        <SwitchAtivoDesativado
          estaLigado={statusAtivo}
          setEstaLigado={setStatusAtivo}
        />
      </Box>
      
    </div>
  );
}