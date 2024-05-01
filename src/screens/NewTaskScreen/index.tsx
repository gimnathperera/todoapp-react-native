import { Image, Text, View } from "react-native";
import Button from "../../components/Button";
import InputDropdown from "../../components/InputDropdown";
import InputTextfield from "../../components/InputTextfield";
import styles from "./styles";
import { useLogic } from "./hooks";
import { FormProvider } from "react-hook-form";

const NewTaskScreen = () => {
  const {
    forms,
    derivedData: { taskStatuses, isLoading },
  } = useLogic();

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
      <FormProvider {...forms.todoForm.form}>
        <View style={styles.formContainer}>
          <InputTextfield placeholder="Task Name" name="name" />
          <InputTextfield placeholder="Task Description" name="description" />
          <InputDropdown
            placeholder="Task Status"
            name="status"
            options={taskStatuses}
          />

          <Button
            title="Add Task"
            onPress={forms.todoForm.form.handleSubmit(forms.todoForm.onSubmit)}
            isLoading={isLoading}
          />
        </View>
      </FormProvider>
    </View>
  );
};

export default NewTaskScreen;
