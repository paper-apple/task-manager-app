import AsyncStorage from "@react-native-async-storage/async-storage";

import { Task } from "../types/task";

const TASKS_KEY = "TASKS";
const HAS_LAUNCHED_KEY = "HAS_LAUNCHED";

export async function saveTasks(
  tasks: Task[]
) {
  try {
    await AsyncStorage.setItem(
      TASKS_KEY,
      JSON.stringify(tasks)
    );
  } catch (error) {
    console.log(
      "Error saving tasks:",
      error
    );
  }
}

export async function loadTasks() {
  try {
    const data =
      await AsyncStorage.getItem(
        TASKS_KEY
      );

    if (!data) {
      return [];
    }

    return JSON.parse(data) as Task[];
  } catch (error) {
    console.log(
      "Error loading tasks:",
      error
    );

    return [];
  }
}

export async function addTask(
  newTask: Task
) {
  try {
    const existingTasks =
      await loadTasks();

    const updatedTasks = [
      newTask,
      ...existingTasks,
    ];

    await saveTasks(updatedTasks);
  } catch (error) {
    console.log(
      "Error adding task:",
      error
    );
  }
}

export async function deleteTask(
  taskId: string
) {
  try {
    const tasks = await loadTasks();

    const updatedTasks = tasks.filter(
      (task) => task.id !== taskId
    );

    await saveTasks(updatedTasks);
  } catch (error) {
    console.log(
      "Error deleting task:",
      error
    );
  }
}

export async function updateTaskStatus(
  taskId: string,
  status: Task["status"]
) {
  try {
    const tasks = await loadTasks();

    const updatedTasks = tasks.map(
      (task) => {
        if (task.id === taskId) {
          return {
            ...task,
            status,
          };
        }

        return task;
      }
    );

    await saveTasks(updatedTasks);
  } catch (error) {
    console.log(
      "Error updating task:",
      error
    );
  }
}

export async function isFirstLaunch() {
  try {
    const hasLaunched =
      await AsyncStorage.getItem(
        HAS_LAUNCHED_KEY
      );

    if (hasLaunched === null) {
      await AsyncStorage.setItem(
        HAS_LAUNCHED_KEY,
        "true"
      );

      return true;
    }

    return false;
  } catch (error) {
    console.log(
      "Error checking first launch:",
      error
    );

    return false;
  }
}