import { Image, Text, View } from "react-native";
import Button from "../Button";
import InputDropdown from "../InputDropdown";
import InputTextfield from "../InputTextfield";
import styles from "./styles";
import { useLogic } from "./hooks";
import { FormProvider } from "react-hook-form";
import { FC } from "react";

type Props = {
  id?: number | null;
};
const FormTaskCreateUpdate: FC<Props> = ({ id }) => {
  const {
    forms,
    derivedData: { taskStatuses, isLoading },
  } = useLogic({ id });

  return (
    <FormProvider {...forms.todoForm.form}>
      <View style={id ? styles.modalFormContainer : styles.formContainer}>
        <InputTextfield placeholder="Task Name" name="name" />
        <InputTextfield placeholder="Task Description" name="description" />
        <InputDropdown
          placeholder="Task Status"
          name="status"
          options={taskStatuses}
        />

        <Button
          title={id ? "Update Task" : "Create Task"}
          onPress={forms.todoForm.form.handleSubmit(forms.todoForm.onSubmit)}
          isLoading={isLoading}
        />
      </View>
    </FormProvider>
  );
};

export default FormTaskCreateUpdate;
