import { Container, ImageEmpty, Subtitle, Title } from "./styles";
import clipboard from "../../assets/clipboard.png";

export const ListEmpty = () => {
  return (
    <Container>
      <ImageEmpty source={clipboard} />
      <Title>Você ainda não tem tarefas cadastradas</Title>
      <Subtitle>Crie tarefas e organize seus itens a fazer</Subtitle>
    </Container>
  );
};
