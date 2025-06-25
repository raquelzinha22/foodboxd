export type IRootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  CreateManager: undefined;
  HomeManager: undefined;
  PainelGestor: undefined;
  EditarCardapioDia: undefined;
  Feedback: undefined;
  PerfilGestor: undefined;
  CardapioDaSemana: undefined;
   EditarDia: {
    index?: number;
    nomeInicial?: string;
    onSave: (nome: string, index?: number) => void;
  };
  MenuUsuario: undefined;
  FeedbackGestor: undefined;
  ValorNutricional: undefined;
  ValorNutricionalUser: undefined;
  GraficoAvaliacoes: undefined;


  Tela1: undefined;
  Tela18: undefined;
  Tela2: undefined;
  Tela3: undefined;
  Tela4: undefined;
  Tela7: undefined;
  Tela8: undefined;
  Tela19: {
  comment?: string; // Parâmetro opcional
};
  Tela20: undefined;
  Tela22: undefined;
  Tela23: undefined;
  Tela24: undefined;
};