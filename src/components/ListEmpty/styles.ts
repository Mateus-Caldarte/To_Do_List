import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  margin-top: 48px;
  align-items: center;
`;

export const ImageEmpty = styled.Image`
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const Subtitle = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
`;
