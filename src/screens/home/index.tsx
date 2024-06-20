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

export const Home = () => {
  const [listTask, setListTask] = useState<string[]>([]);
  const [completedTasks, setCompletedTasks] = useState<number>(0);
  const [newTask, setNewTask] = useState<string>("");

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    saveTasks();
  }, [listTask]);

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
        setListTask(JSON.parse(storedTasks));
      }
    } catch (error) {
      console.error("Falha ao carregar os dados", error);
    }
  };

  const handleAddTask = () => {
    if (newTask.trim()) {
      setListTask((prevTasks) => [...prevTasks, newTask]);
      setNewTask("");
    }
  };

  const handleToggleCompleted = (completed: boolean) => {
    setCompletedTasks((prevCompletedTasks) =>
      completed ? prevCompletedTasks + 1 : prevCompletedTasks - 1
    );
  };

  const handleDeleteTask = (taskToDelete: string) => {
    setListTask((prevTasks) =>
      prevTasks.filter((task) => task !== taskToDelete)
    );
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
              text={item}
              onDelete={() => handleDeleteTask(item)}
              onToggleCompleted={handleToggleCompleted}
            />
          )}
          keyExtractor={(item) => item}
          ListEmptyComponent={() => <ListEmpty />}
        />
      </Container>
    </>
  );
};
