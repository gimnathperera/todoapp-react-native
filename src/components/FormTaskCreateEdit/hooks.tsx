import { zodResolver } from "@hookform/resolvers/zod";
import { UseFormReturn, useForm } from "react-hook-form";
import { ToDo, todoSchema } from "./schema";
import { Option } from "../InputDropdown";
import {
  useCreateTaskMutation,
  useLazyFetchTaskDetailsQuery,
  useUpdateTaskMutation,
} from "../../store/api/splits/tasks";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { Screens } from "../../constants/config";
import { useEffect } from "react";

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

type Props = {
  id?: number | null;
};

export const useLogic = ({ id }: Props): ReturnTypeLogic => {
  const [createNewTask, { isLoading }] = useCreateTaskMutation();
  const [updateTask, { isLoading: isUpdateTaskLoading }] =
    useUpdateTaskMutation();
  const [fetchTaskDetails, { isLoading: isTaskDetailsFetching }] =
    useLazyFetchTaskDetailsQuery();

  const navigation =
    useNavigation<StackNavigationProp<ParamListBase, Screens>>();

  const todoForm = useForm({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      name: "",
      description: "",
      status: "TODO",
    },
  });

  const init = async () => {
    if (id) {
      try {
        const result = await fetchTaskDetails({ id });

        if (result?.data) todoForm.reset(result?.data);
      } catch (error) {}
    }
  };

  useEffect(() => {
    init();
  }, []);

  const handleOnCreateNewTask = async (data: ToDo): Promise<void> => {
    try {
      const result = await createNewTask(data);
      if (result) {
        todoForm.reset();
        navigation.navigate(Screens.HomeScreen);
      }
    } catch (error) {}
  };

  const handleOnUpdateTask = async (data: ToDo): Promise<void> => {
    try {
      const result = await updateTask({ ...data, id: Number(id) });
      if (result) {
        console.log(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnToDoSubmit = async (data: ToDo): Promise<void> => {
    try {
      if (id) {
        await handleOnUpdateTask(data);
      } else {
        await handleOnCreateNewTask(data);
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
    isLoading: isLoading || isTaskDetailsFetching || isUpdateTaskLoading,
  };

  return {
    forms,
    derivedData,
  };
};
