import { TextField, MenuItem, Typography } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";

export default function Step2Contato({ handleBack }: { handleBack: () => void }) {
  const {
    control,
    formState: { errors }
  } = useFormContext();

  const departamentos = ["RH", "Financeiro", "TI", "Marketing", "Comercial"];

  return (
    <>
      <Typography
        variant="h4"
        color="#686767ff"
        sx={{ marginTop: '100px', fontWeight: 'bold', fontSize: '24px' }}
      >
        Informações Profissionais
      </Typography>

      <Controller
        name="departamento"
        control={control}
        rules={{ required: "Selecione um departamento" }}
        render={({ field }) => (
          <TextField
            {...field}
            select
            label="Departamento"
            error={!!errors.departamento}
            helperText={errors.departamento?.message?.toString()}
            fullWidth
            margin="normal"
          >
            {departamentos.map((departamento) => (
              <MenuItem key={departamento} value={departamento}>
                {departamento}
              </MenuItem>
            ))}
          </TextField>
        )}
      />
    </>
  );
}
