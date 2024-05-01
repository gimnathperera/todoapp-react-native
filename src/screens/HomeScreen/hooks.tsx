import { useEffect } from "react";
import { useLazyFetchTaskQuery } from "../../store/api/splits/tasks";
import { Task } from "../../types/task-types";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Screens } from "../../constants/config";

interface ReturnTypeLogic {
  derivedData: {
    tasks: Task[];
    isTaskLoading: boolean;
  };
  handlers: {
    handleOnCreateNewTask: () => void;
  };
}

export const useLogic = (): ReturnTypeLogic => {
  const navigation =
    useNavigation<StackNavigationProp<ParamListBase, Screens>>();
  const [fetchTasks, { data, isFetching }] = useLazyFetchTaskQuery();

  const init = async () => {
    await fetchTasks();
  };

  useEffect(() => {
    init();
  }, []);

  const handleOnCreateNewTask = () => {
    navigation.navigate(Screens.NewTaskScreen);
  };

  const derivedData = {
    tasks: data ?? [],
    isTaskLoading: isFetching,
  };

  const handlers = {
    handleOnCreateNewTask,
  };

  return {
    derivedData,
    handlers,
  };
};
