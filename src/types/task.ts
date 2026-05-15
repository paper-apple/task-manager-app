export type TaskStatus =
  | "in_progress"
  | "completed"
  | "cancelled";

export interface Task {
  id: string;
  title: string;
  description: string;
  address: string;
  createdAt: string;
  dueDate: string;
  status: TaskStatus;
}