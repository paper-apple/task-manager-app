import { Task } from "./task";

export type RootStackParamList = {
  Tasks: undefined;

  CreateTask: undefined;

  TaskDetails: {
    taskId: string;
  };
};