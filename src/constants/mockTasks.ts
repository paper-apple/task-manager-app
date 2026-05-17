import { Task } from "../types/task";

export const mockTasks: Task[] = [
  {
    id: "1",
    title: "Installing the battery",
    description: "Installing the battery with 7 a/h. Sign the documents for the purchase of the battery",
    address: "3 Kalinina Street",
    taskDate: "18.05.2026 15:30",
    status: "completed",
  },

  {
    id: "2",
    title: "Register access keys",
    description: "Register access keys #4, #5 and #6. The device is A12",
    address: "20 Chapayeva Street, Apt. 16",
    taskDate: "25.05.2026 12:00",
    status: "cancelled",
  },

  {
    id: "3",
    title: "Replacing the sensor",
    description: "Replacing the SWAN QUAD motion sensor on the second floor",
    address: "55 Lenin Street",
    taskDate: "20.05.2026 9:00",
    status: "in_progress",
  },
];