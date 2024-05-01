import { Text, View } from "react-native";
import styles from "./styles";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import ToDoBoard from "../../components/TodoBoard";
import Button from "../../components/Button";
import { Screens } from "../../constants/config";

const HomeScreen = () => {
  const navigation =
    useNavigation<StackNavigationProp<ParamListBase, Screens>>();

  const handleOnCreateNewTask = () => {
    navigation.navigate(Screens.NewTaskScreen);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ToDo Board</Text>
      <ToDoBoard />
      <View style={{ width: "100%", padding: 16 }}>
        <Button title="Create a New Task" onPress={handleOnCreateNewTask} />
      </View>
    </View>
  );
};

export default HomeScreen;
