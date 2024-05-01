import { zodResolver } from "@hookform/resolvers/zod";
import { UseFormReturn, useForm } from "react-hook-form";
import { ToDo, todoSchema } from "./schema";
import { Option } from "../../components/InputDropdown";
import { useCreateTaskMutation } from "../../store/api/splits/tasks";

interface ReturnTypeLogic {
  forms: Record<
    "todoForm",
    { form: UseFormReturn<ToDo>; onSubmit: (data: ToDo) => void }
  >;
  derivedData: {
    taskStatus: Option[];
  };
}

export const useLogic = (): ReturnTypeLogic => {
  const todoForm = useForm({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      name: "",
      description: "",
      status: "",
    } as ToDo,
  });

  const [createNewTask] = useCreateTaskMutation();

  const handleOnToDoSubmit = async (data: ToDo): Promise<void> => {
    try {
      const result = await createNewTask(data);
    } catch (error) {}
  };

  const TaskStatusOptions = [
    { label: "ToDo", value: "TODO" },
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
    taskStatus: TaskStatusOptions,
  };

  return {
    forms,
    derivedData,
  };
};
