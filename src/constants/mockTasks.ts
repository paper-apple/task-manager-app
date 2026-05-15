import { Task } from "../types/task";

export const mockTasks: Task[] = [
  {
    id: "1",
    title: "Inspect cooling system",
    description: "Check air conditioning unit functionality",
    address: "12 Main Street",
    createdAt: new Date().toISOString(),
    dueDate: "2026-05-20 10:00",
    status: "in_progress",
  },

  {
    id: "2",
    title: "Replace router",
    description: "Install new office router",
    address: "45 Business Ave",
    createdAt: new Date().toISOString(),
    dueDate: "2026-05-18 14:30",
    status: "in_progress",
  },

  {
    id: "3",
    title: "Elevator maintenance",
    description: "Monthly inspection",
    address: "78 Center Plaza",
    createdAt: new Date().toISOString(),
    dueDate: "2026-05-25 09:00",
    status: "completed",
  },
];