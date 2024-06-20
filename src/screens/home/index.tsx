import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { ButtonIcon } from "../../components/ButtonIcon";
import { ListTasksChecked } from "../../components/ListTasksChecked";
import { Input } from "../../components/Input";
import { Header } from "../../components/header";
import { ListEmpty } from "../../components/ListEmpty";
import { ListItem } from "../../components/ListItem";
import { Container, ContainerAddInputAndButton, Divider } from "./styled";

const TASKS_STORAGE_KEY = "@tasks_storage_key";
const COMPLETED_TASKS_STORAGE_KEY = "@completed_tasks_storage_key";

export const Home = () => {
  const [listTask, setListTask] = useState<
    { text: string; completed: boolean }[]
  >([]);
  const [completedTasks, setCompletedTasks] = useState<number>(0);
  const [newTask, setNewTask] = useState<string>("");

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    saveTasks();
  }, [listTask]);

  useEffect(() => {
    saveCompletedTasks();
  }, [completedTasks]);

  const saveTasks = async () => {
    try {
      await AsyncStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(listTask));
    } catch (error) {
      console.error("Falha ao salvar os dados", error);
    }
  };

  const loadTasks = async () => {
    try {
      const storedTasks = await AsyncStorage.getItem(TASKS_STORAGE_KEY);
      if (storedTasks) {
        const parsedTasks = JSON.parse(storedTasks);
        setListTask(parsedTasks);
        setCompletedTasks(
          parsedTasks.filter((task: any) => task.completed).length
        );
      }
    } catch (error) {
      console.error("Falha ao carregar os dados", error);
    }
  };

  const saveCompletedTasks = async () => {
    try {
      await AsyncStorage.setItem(
        COMPLETED_TASKS_STORAGE_KEY,
        JSON.stringify(completedTasks)
      );
    } catch (error) {
      console.error("Falha ao salvar os dados de tarefas completadas", error);
    }
  };

  const handleAddTask = () => {
    if (newTask.trim()) {
      setListTask((prevTasks) => [
        ...prevTasks,
        { text: newTask, completed: false },
      ]);
      setNewTask("");
    }
  };

  const handleToggleCompleted = (taskToToggle: {
    text: string;
    completed: boolean;
  }) => {
    setListTask((prevTasks) =>
      prevTasks.map((task) =>
        task.text === taskToToggle.text
          ? { ...task, completed: !task.completed }
          : task
      )
    );
    setCompletedTasks((prevCompletedTasks) =>
      taskToToggle.completed ? prevCompletedTasks - 1 : prevCompletedTasks + 1
    );
  };

  const handleDeleteTask = (taskToDelete: {
    text: string;
    completed: boolean;
  }) => {
    setListTask((prevTasks) =>
      prevTasks.filter((task) => task.text !== taskToDelete.text)
    );
    if (taskToDelete.completed) {
      setCompletedTasks((prevCompletedTasks) => prevCompletedTasks - 1);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <ContainerAddInputAndButton>
          <Input
            value={newTask}
            onChangeText={setNewTask}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
          />
          <ButtonIcon icon="add-circle-outline" onPress={handleAddTask} />
        </ContainerAddInputAndButton>
        <ListTasksChecked
          textCriated={listTask.length}
          textFinish={completedTasks}
        />
        <Divider />
        <FlatList
          style={{ marginTop: 30 }}
          data={listTask}
          renderItem={({ item }) => (
            <ListItem
              text={item.text}
              completed={item.completed}
              onDelete={() => handleDeleteTask(item)}
              onToggleCompleted={() => handleToggleCompleted(item)}
            />
          )}
          keyExtractor={(item) => item.text}
          ListEmptyComponent={() => <ListEmpty />}
        />
      </Container>
    </>
  );
};
