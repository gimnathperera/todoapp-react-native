import { zodResolver } from "@hookform/resolvers/zod";
import { UseFormReturn, useForm } from "react-hook-form";
import { ToDo, todoSchema } from "./schema";
import { Option } from "../../components/InputDropdown";
import { useCreateTaskMutation } from "../../store/api/splits/tasks";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { Screens } from "../../constants/config";

interface ReturnTypeLogic {
  forms: Record<
    "todoForm",
    { form: UseFormReturn<ToDo>; onSubmit: (data: ToDo) => void }
  >;
  derivedData: {
    taskStatuses: Option[];
    isLoading: boolean;
  };
}

export const useLogic = (): ReturnTypeLogic => {
  const navigation =
    useNavigation<StackNavigationProp<ParamListBase, Screens>>();

  const todoForm = useForm({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      name: "",
      description: "",
      status: "TODO",
    } as ToDo,
  });

  const [createNewTask, { isLoading }] = useCreateTaskMutation();

  const handleOnToDoSubmit = async (data: ToDo): Promise<void> => {
    try {
      const result = await createNewTask(data);
      if (result) {
        todoForm.reset();
        navigation.navigate(Screens.HomeScreen);
      }
    } catch (error) {}
  };

  const TaskStatusOptions = [
    { label: "To Do", value: "TODO" },
    { label: "In Progress", value: "IN_PROGRESS" },
    { label: "Done", value: "DONE" },
  ];

  const forms = {
    todoForm: {
      form: todoForm,
      onSubmit: handleOnToDoSubmit,
    },
  };

  const derivedData = {
    taskStatuses: TaskStatusOptions,
    isLoading,
  };

  return {
    forms,
    derivedData,
  };
};
