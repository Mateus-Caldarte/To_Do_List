import { ButtonIcon } from "../../components/ButtonIcon";
import { ListTasksChecked } from "../../components/ListTasksChecked";
import { Input } from "../../components/Input";
import { Header } from "../../components/header";
import { ListEmpty } from "../../components/ListEmpty";
import { ListItem } from "../../components/ListItem";
import { Container, ContainerAddInputAndButton, Divider } from "./styled";

export const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <ContainerAddInputAndButton>
          <Input
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
          />
          <ButtonIcon icon="add-circle-outline" />
        </ContainerAddInputAndButton>
        <ListTasksChecked textCriated="0" textFinish="1" />
        <Divider />
        <ListEmpty />
      </Container>
    </>
  );
};
