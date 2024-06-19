import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 175px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;
