import { groupBy } from "lodash-es";
import { Column } from "../components/TodoBoard";
import { Task } from "../types/task-types";

export const groupTasks = (tasks: Task[]): Column[] => {
  const groupedTasks = groupBy(tasks, "status");

  return Object.keys(groupedTasks).map((name, index) => ({
    id: index + 1,
    name,
    rows: groupedTasks[name],
  }));
};
