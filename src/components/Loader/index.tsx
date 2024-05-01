import { View, ActivityIndicator } from "react-native";
import styles from "./styles";
import { FC } from "react";

const Loader: FC = () => {
  return (
    <View style={styles.overlay}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

export default Loader;
