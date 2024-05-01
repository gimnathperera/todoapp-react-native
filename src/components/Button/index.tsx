import { FC } from "react";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

type Props = {
  onPress: () => void;
  title: string;
  isLoading?: boolean;
};

const Button: FC<Props> = ({ onPress, title, isLoading = false }) => (
  <TouchableOpacity
    onPress={onPress}
    style={styles.appButtonContainer}
    disabled={isLoading}
  >
    {isLoading ? (
      <ActivityIndicator size="small" color="#0000ff" />
    ) : (
      <Text style={styles.buttonText}>{title}</Text>
    )}
  </TouchableOpacity>
);

export default Button;
