import { Container } from "./styles";
import logo from "../../assets/logo.png";
import { Image } from "react-native";

export const Header = () => {
  return (
    <Container>
      <Image source={logo} style={{ width: 120 }} />
    </Container>
  );
};
