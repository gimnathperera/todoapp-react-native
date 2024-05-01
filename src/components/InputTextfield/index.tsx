import { FC } from "react";
import { Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";

type Props = {
  placeholder: string;
};

const InputTextfield: FC<Props> = ({ placeholder }) => (
  <TextInput placeholder={placeholder} style={styles.textInput} />
);

export default InputTextfield;
