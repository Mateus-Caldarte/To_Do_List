import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Container, Icon } from "./styles";

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
};

export function ButtonIcon({ icon, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon name={icon} />
    </Container>
  );
}
