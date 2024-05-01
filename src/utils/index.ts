import { groupBy, omit, startCase } from "lodash-es";
import { Column } from "../components/TodoBoard";
import { Task } from "../types/task-types";

const formatStatus = (status: string): string => {
  return startCase(status.toLowerCase());
};

export const groupTasks = (tasks: Task[]): Column[] => {
  const groupedTasks = groupBy(tasks, "status");
  const todoRows = groupedTasks["TODO"] || [];

  // Omit "TODO" and map over the rest of the statuses to create grouped tasks
  const restGroups = omit(groupedTasks, "TODO");

  const restGroupedTasks = Object.keys(restGroups).map((name, index) => ({
    id: index + 2, // Start index from 2 if "TODO" exists
    name: formatStatus(name),
    rows: restGroups[name],
  }));

  // Create the first object with "TODO" rows if they exist
  const todoGroup = todoRows.length
    ? [
        {
          id: 1,
          name: formatStatus("TODO"),
          rows: todoRows,
        },
      ]
    : [];

  return [...todoGroup, ...restGroupedTasks];
};
