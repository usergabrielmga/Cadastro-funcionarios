README.md
Cadastro-funcionarios

Sistema de cadastro de funcionários com interface responsiva, integração com Firebase e Material-UI.

Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

Node.js (versão LTS recomendada)

npm ou yarn

Instalação

Clone o repositório:

git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio


Instale as dependências:

npm install
# ou
yarn install

Configuração do Firebase

Crie um projeto no Firebase.

Vá em Configurações do projeto > Geral > Suas apps e adicione uma app Web.

Copie as configurações do Firebase (apiKey, authDomain, projectId, etc).

Crie um arquivo .env na raiz do projeto:

REACT_APP_API_KEY=your_api_key
REACT_APP_AUTH_DOMAIN=your_auth_domain
REACT_APP_PROJECT_ID=your_project_id
REACT_APP_STORAGE_BUCKET=your_storage_bucket
REACT_APP_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_APP_ID=your_app_id


No arquivo src/services/firebase.ts use as variáveis de ambiente:

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

Rodando o Projeto

Para iniciar o projeto em modo de desenvolvimento:

npm start
# ou
yarn start


O projeto será executado em http://localhost:3000 por padrão.

