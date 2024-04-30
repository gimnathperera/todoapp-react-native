import { View } from "react-native";
import ToDoBoard from "../../components/TodoBoard";
import styles from "./styles";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ToDoBoard />
    </View>
  );
};

export default HomeScreen;
