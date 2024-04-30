import { FC } from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

type Props = {
  onPress: () => void;
  title: string;
};

const Button: FC<Props> = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

export default Button;
