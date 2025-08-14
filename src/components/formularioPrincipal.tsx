import React, { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebase";

import Step1PersonalInfo from "./Step1PersonalInfo";
import Step2Contato from "./Step2Contato";
import TabelaFuncionarios from "./TabelaFuncionarios";
import { Box } from "@mui/material";
import ProgressBarCadastro from "./progressBar";
import NavButtons from "./NavButtons";
import PrevNextButtons from "./prevNextButtons";
import ProcessInput from "./processInput";
import { useNavigate } from "react-router-dom";

interface FormData {
  nome: string;
  email: string;
  departamento: string;
}

interface Funcionario {
  id: string;
  nome: string;
  email: string;
  departamento: string;
  status: "Ativo" | "Inativo";
}

export default function FormularioPrincipal() {
  const [statusAtivo, setStatusAtivo] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const methods = useForm<FormData>({ mode: "onChange" });

  useEffect(() => {
    async function fetchFuncionarios() {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, "funcionarios"));
        const funcionariosList: Funcionario[] = querySnapshot.docs.map(
          (doc) => ({
            id: doc.id,
            ...(doc.data() as Omit<Funcionario, "id">),
          })
        );
        setFuncionarios(funcionariosList);
      } catch (error) {
        console.error("Erro ao buscar funcionários:", error);
      } finally {
        setLoading(false);
      }
    }

    if (currentStep === 3) {
      fetchFuncionarios();
    }
  }, [currentStep]);

 const onSubmit = async (data: FormData) => {
    if (currentStep === 1) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      try {
        const dadosComStatus = {
          ...data,
          status: statusAtivo ? "Ativo" : "Inativo",
        };

        await addDoc(collection(db, "funcionarios"), dadosComStatus);

        // Navegar para a página de colaboradores depois de cadastrar
        navigate("/colaboradores");

      } catch (error) {
        console.error("Erro ao salvar funcionário:", error);
        alert("Não foi possível salvar o funcionário.");
      }
    }
  };
  const handleBackStep = () => {
    setCurrentStep((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1PersonalInfo
            handleBack={handleBackStep}
            statusAtivo={statusAtivo}
            setStatusAtivo={setStatusAtivo}
          />
        );
      case 2:
        return <Step2Contato handleBack={handleBackStep} />;
      case 3:
        if (loading) {
          return <p>Carregando funcionários...</p>;
        }
        return (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <TabelaFuncionarios />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "40px",
      }}
    >
      {currentStep !== 3 && (
        <div style={{ width: "65%", position: "absolute" }}>
          <NavButtons />
          <ProgressBarCadastro currentStep={currentStep} totalSteps={3} />
          <ProcessInput currentStep={currentStep} />
        </div>
      )}
      

      <Box
        sx={{
          p: 4,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "800px" }}>{renderStep()}</Box>

            {/* Só renderiza os botões se NÃO for o passo 3 */}
            {currentStep !== 3 && (
              <PrevNextButtons
                handleBack={handleBackStep}
                isFirstStep={currentStep === 1}
              />
            )}
          </form>
        </FormProvider>
      </Box>
    </div>
  );
}
