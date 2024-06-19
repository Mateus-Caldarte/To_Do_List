import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;
  background-color: ${({ theme }) => theme.COLORS.BLUE_DARK};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  margin-left: 6px;
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_200,
}))``;
