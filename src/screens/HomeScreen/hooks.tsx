import { useEffect, useState } from "react";
import { useLazyFetchTaskQuery } from "../../store/api/splits/tasks";
import { Task } from "../../types/task-types";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Screens } from "../../constants/config";

interface ReturnTypeLogic {
  derivedData: {
    tasks: Task[];
    isTaskLoading: boolean;
    isModalUpdateVisible: boolean;
    selectedTaskId: number | null;
  };
  handlers: {
    handleOnCreateNewTask: () => void;
    handleOnClickUpdateTask: (id: number) => void;
    handleOnUpdateModalVisibility: () => void;
  };
}

export const useLogic = (): ReturnTypeLogic => {
  const [isModalUpdateVisible, setIsModalUpdateVisible] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);
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

  const handleOnClickUpdateTask = (id: number) => {
    setSelectedTaskId(id);
    handleOnUpdateModalVisibility();
  };

  const handleOnUpdateModalVisibility = () => {
    setIsModalUpdateVisible((prev) => !prev);
  };

  const derivedData = {
    tasks: data ?? [],
    isTaskLoading: isFetching,
    isModalUpdateVisible,
    selectedTaskId,
  };

  const handlers = {
    handleOnCreateNewTask,
    handleOnClickUpdateTask,
    handleOnUpdateModalVisibility,
  };

  return {
    derivedData,
    handlers,
  };
};
