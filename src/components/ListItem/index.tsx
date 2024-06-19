import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";
import {
  Container,
  Circle,
  TextContainer,
  ItemText,
  IconContainer,
  Icon,
} from "./styles";

type ListItemProps = TouchableOpacityProps & {
  icon?: keyof typeof MaterialIcons.glyphMap;
  text: string;
  onDelete: () => void;
};

export const ListItem: React.FC<ListItemProps> = ({ text, onDelete }) => {
  const [completed, setCompleted] = useState(false);

  const handleToggleCompleted = () => {
    setCompleted(!completed);
  };

  return (
    <Container>
      <Circle completed={completed} onPress={handleToggleCompleted}>
        {completed && <MaterialIcons name="check" size={20} color="#fff" />}
      </Circle>
      <TextContainer>
        <ItemText completed={completed}>{text}</ItemText>
      </TextContainer>
      <IconContainer onPress={onDelete}>
        <Icon name="delete" />
      </IconContainer>
    </Container>
  );
};
