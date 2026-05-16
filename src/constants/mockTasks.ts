import { Task } from "../types/task";

export const mockTasks: Task[] = [
  {
    id: "1",
    title: "Inspect cooling system",
    description: "Check air conditioning unit functionality",
    address: "12 Main Street",
    taskDate: "20.05.2026 10:00",
    status: "in_progress",
  },

  {
    id: "2",
    title: "Replace router",
    description: "Install new office router",
    address: "45 Business Ave",
    taskDate: "18.05.2026 14:30",
    status: "in_progress",
  },

  {
    id: "3",
    title: "Elevator maintenance",
    description: "Monthly inspection",
    address: "78 Center Plaza",
    taskDate: "25.05.2026 09:00",
    status: "completed",
  },
];