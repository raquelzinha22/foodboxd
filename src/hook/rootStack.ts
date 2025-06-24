export type IRootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  CreateManager: undefined;
  HomeManager: undefined;
  PainelGestor: undefined;
  EditarCardapioDia: undefined;
  Feedback: undefined;
  PerfilGestor: undefined;
  CardapioDaSemana: undefined
   EditarDia: {
    index?: number;
    nomeInicial?: string;
    onSave: (nome: string, index?: number) => void;
  };

  // Telas temporárias
  Tela1: undefined;
  Tela2: undefined;
  Tela3: undefined;
  Tela4: undefined;
<<<<<<< HEAD
  Welcome: undefined;
  CreateManager: undefined; // Cadastro
  Tela7: { email: string } | undefined; // Esqueci a senha, por exemplo
  Tela8: undefined; // Tela de sucesso após verificação
  Tela18: undefined; // Tela principal após login
  Login: undefined;
  HomeManager: undefined;
  PainelGestor: undefined; // Tela de feedback
  Feedback: undefined; // Feedback
  Tela20: undefined; // Cardápio semanal
  Tela21: undefined; // Valor nutricional
  Tela22: undefined; // Perfil do gestor
  Tela23: undefined; // Envio de avaliação
  Tela24: undefined; // Tela adicional
  EditarCardapioDia: undefined; // Edição do cardápio do dia para gestor
};
=======
  Tela7: undefined;
  Tela8: undefined;
  Tela20: undefined;
  Tela21: undefined;
  Tela22: undefined;
  Tela23: undefined;
  Tela24: undefined;
};
>>>>>>> 69086e00b8b2dc66b2e704994eee4e11af3c87a1
