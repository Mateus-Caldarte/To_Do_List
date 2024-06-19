import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components/native";

interface CircleProps {
  completed?: boolean;
}

export const Container = styled.View`
  width: 100%;
  height: 80px;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  background-color: #333;
  border-width: 0.7px;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_300};
  margin: 10px 0;
`;

export const Circle = styled.TouchableOpacity<CircleProps>`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  border-width: 2px;
  border-color: ${({ completed }) => (completed ? "#1e6f9f" : "#ccc")};
  align-items: center;
  justify-content: center;
  background-color: ${({ completed }) =>
    completed ? "#1e6f9f" : "transparent"};
`;

export const TextContainer = styled.View`
  flex: 1;
  margin-left: 10px;
`;

export const ItemText = styled.Text<CircleProps>`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ completed }) => (completed ? "#ccc" : "#fff")};
  text-decoration-line: ${({ completed }) =>
    completed ? "line-through" : "none"};
`;

export const IconContainer = styled.TouchableOpacity`
  margin-left: 10px;
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_200,
}))``;
