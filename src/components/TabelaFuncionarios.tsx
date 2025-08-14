import React, { useState, useEffect } from 'react';
import SouthIcon from '@mui/icons-material/South';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  CircularProgress,
  Box,
  Typography,
} from '@mui/material';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../services/firebase';
import NavButtons from './NavButtons';

interface Funcionario {
  id: string;
  nome: string;
  email: string;
  departamento: string;
  status: 'Ativo' | 'Inativo';
}

export default function TabelaFuncionarios() {
  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFuncionarios = async () => {
      try {
        setLoading(true);
        const querySnapshot = await getDocs(collection(db, "funcionarios"));
        const funcionariosList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...(doc.data() as Omit<Funcionario, 'id'>),
        }));
        setFuncionarios(funcionariosList);
      } catch (error) {
        console.error("Erro ao buscar funcionários:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFuncionarios();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
        <Typography sx={{ ml: 2 }}>Carregando funcionários...</Typography>
      </Box>
    );
  }

  if (funcionarios.length === 0) {
    return <Typography>Nenhum funcionário cadastrado.</Typography>;
  }

  return (
    <>
    
      <div style={{display:'flex', justifyContent: 'center', marginTop: '200px'}}>
      <NavButtons isTabela={true}/>
      <TableContainer component={Paper} sx={{width: '1000px', maxHeight: '600px', borderRadius: '20px',  overflowY: 'auto' }}>
      <Table sx={{ maxWidth: '100%' }} aria-label="tabela de funcionários">
       <TableHead sx={{ background: '#f3f3f3ff' }}>
        <TableRow>
          <TableCell>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#747474ff', fontWeight: 'bold'}}>
              Nome <SouthIcon fontSize="small" sx= {{color: '#747474ff'}} />
            </Box>
          </TableCell>
          <TableCell align="right">
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '4px', color: '#747474ff', fontWeight: 'bold'}}>
              Email <SouthIcon fontSize="small" sx= {{color: '#747474ff'}} />
            </Box>
          </TableCell>
          <TableCell align="right">
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '4px', color: '#747474ff', fontWeight: 'bold'}} >
              Departamento <SouthIcon fontSize="small" sx= {{color: '#747474ff'}} />
            </Box>
          </TableCell>
          <TableCell align="right">
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '4px', color: '#747474ff', fontWeight: 'bold'}} >
              Status <SouthIcon fontSize="small" sx= {{color: '#747474ff'}} />
            </Box>
          </TableCell>
        </TableRow>
      </TableHead>

        <TableBody>
          {funcionarios.map((funcionario) => (
            <TableRow key={funcionario.id}>
              <TableCell component="th" scope="row">
                {funcionario.nome}
              </TableCell>
              <TableCell align="right">{funcionario.email}</TableCell>
              <TableCell align="right">{funcionario.departamento}</TableCell>
              <TableCell align="right">
                <Chip
                  label={funcionario.status}
                  sx={{
                    borderRadius: '8px',
                    backgroundColor: funcionario.status === 'Ativo' ? '#d2f0d3ff' : '#eccdcbff',
                    color: funcionario.status === 'Ativo' ? '#2d9931ff' : '#f44336', 
                    fontWeight: 'bold'
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
    </div>
    </>
    
    
  );
}
