import { Text, View } from "react-native";
import Button from "../../components/Button";
import ToDoBoard, { Column } from "../../components/TodoBoard";
import { useLogic } from "./hooks";
import styles from "./styles";
import Loader from "../../components/Loader";
import { groupTasks } from "../../utils";

const HomeScreen = () => {
  const {
    derivedData: { tasks, isTaskLoading },
    handlers: { handleOnCreateNewTask },
  } = useLogic();

  const data: Column[] = groupTasks(tasks);

  return (
    <View style={styles.container}>
      {isTaskLoading ? (
        <Loader />
      ) : (
        <>
          <Text style={styles.title}>ToDo Board</Text>
          <ToDoBoard tasks={data ?? []} />
          <View style={{ width: "100%", padding: 16 }}>
            <Button title="Create a New Task" onPress={handleOnCreateNewTask} />
          </View>
        </>
      )}
    </View>
  );
};

export default HomeScreen;
