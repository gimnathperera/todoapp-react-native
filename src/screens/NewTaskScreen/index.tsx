import { Image, Text, View } from "react-native";
import FormTaskCreateUpdate from "../../components/FormTaskCreateEdit";
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
      <FormTaskCreateUpdate />
    </View>
  );
};

export default NewTaskScreen;
