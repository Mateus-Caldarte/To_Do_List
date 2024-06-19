import styled from "styled-components/native";

export const Container = styled.View`
  padding: 24px;
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const ContainerAddInputAndButton = styled.View`
  margin-top: -55px;
  flex-direction: row;
`;

export const Divider = styled.View`
  height: 0.26px;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`;
