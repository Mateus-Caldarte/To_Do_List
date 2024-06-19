import {
  Container,
  TaskCreated,
  TaskFinish,
  NumberOfTasks,
  ViewOptionTasks,
} from "./styles";

type Props = {
  textCriated: string | number;
  textFinish: string | number;
};

export const ListTasksChecked = ({ textCriated, textFinish }: Props) => {
  return (
    <Container>
      <ViewOptionTasks>
        <TaskCreated>Criadas </TaskCreated>
        <NumberOfTasks>{textCriated}</NumberOfTasks>
      </ViewOptionTasks>
      <ViewOptionTasks>
        <TaskFinish>Concluídas </TaskFinish>
        <NumberOfTasks>{textFinish}</NumberOfTasks>
      </ViewOptionTasks>
    </Container>
  );
};
