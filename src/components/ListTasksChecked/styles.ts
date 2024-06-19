import styled from "styled-components/native";

export const Container = styled.View`
  padding: 24px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 32px;
`;

export const ViewOptionTasks = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TaskCreated = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLUE};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const TaskFinish = styled.Text`
  color: ${({ theme }) => theme.COLORS.PURPLE};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const NumberOfTasks = styled.Text`
  width: 30px;
  height: 18px;
  border-radius: 9px;
  text-align: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
  color: #fff;
  line-height: 18px;
`;
