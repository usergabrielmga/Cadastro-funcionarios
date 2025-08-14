import { Box, Button } from "@mui/material";
import { useFormContext } from "react-hook-form";

type StepProps = {
  handleBack: () => void;
  isFirstStep: boolean;          
};

function PrevNextButtons({ handleBack, isFirstStep }: StepProps) {
  const {
    formState: { isValid }
  } = useFormContext();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        maxWidth: "1200px",
        position:  'absolute',
        bottom: '200px'
      }}
    >
      <Button 
        variant="text" 
        onClick={handleBack} 
        sx={{ mr: 2 , fontWeight: 'bold', color: 'rgba(66, 68, 66, 0.33)', textTransform: 'none'}} 
        disabled={isFirstStep}       
      >
        Voltar
      </Button>

      <Button
        variant="contained"
        color="primary"
        type="submit"
        sx={{  fontWeight: 'bold', textTransform: 'none', backgroundColor: '#4caf50', height: '50px', width: '90px'}} 
        disabled={!isValid}         
      >
        Próximo
      </Button>
    </Box>
  );
}

export default PrevNextButtons;
