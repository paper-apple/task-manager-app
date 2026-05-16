export type TaskStatus =
  | "in_progress"
  | "completed"
  | "cancelled";

export interface Task {
  id: string;
  title: string;
  description: string;
  address: string;
  taskDate: string;
  status: TaskStatus;
}