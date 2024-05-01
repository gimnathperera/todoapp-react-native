import { Image, Text, View } from "react-native";
import Button from "../../components/Button";
import InputDropdown from "../../components/InputDropdown";
import InputTextfield from "../../components/InputTextfield";
import styles from "./styles";

const NewTaskScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Create a new task</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/taskbanner.png")}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
      <View style={styles.formContainer}>
        <InputTextfield placeholder="Task Name" />
        <InputTextfield placeholder="Task Name" />
        <InputDropdown placeholder="Task Status" />

        <Button title="Add Task" onPress={() => {}} />
      </View>
    </View>
  );
};

export default NewTaskScreen;
