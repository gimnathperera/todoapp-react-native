export type Task = {
  id?: number;
  name: string;
  description: string;
  status: TaskStatus | string;
};

export enum TaskStatus {
  TODO = "TODO",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE",
}
