import { useEffect, useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

import {
  useNavigation,
  useRoute,
} from "@react-navigation/native";

import {
  deleteTask,
  loadTasks,
  updateTaskStatus,
} from "../storage/tasksStorage";

import { Task } from "../types/task";
import { formatStatus } from "../utils/formatStatus";

export default function TaskDetailsScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  const { taskId } = route.params;

  const [task, setTask] =
    useState<Task | null>(null);

  async function fetchTask() {
    const tasks = await loadTasks();

    const currentTask = tasks.find(
      (item) => item.id === taskId
    );

    if (currentTask) {
      setTask(currentTask);
    }
  }

  useEffect(() => {
    fetchTask();
  }, []);

  async function handleDelete() {
    if (!task) {
      return;
    }

    await deleteTask(task.id);

    navigation.goBack();
  }

  async function handleStatusChange(
    status: Task["status"]
  ) {
    if (!task) {
      return;
    }

    await updateTaskStatus(
      task.id,
      status
    );

    await fetchTask();
  }

  if (!task) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {task.title}
      </Text>

      <Text style={styles.label}>
        Description
      </Text>

      <Text style={styles.text}>
        {task.description}
      </Text>

      <Text style={styles.label}>
        Address
      </Text>

      <Text style={styles.text}>
        {task.address}
      </Text>

      <Text style={styles.label}>
        Due date
      </Text>

      <Text style={styles.text}>
        {task.taskDate}
      </Text>

      <Text style={styles.label}>
        Current status
      </Text>

      <Text style={styles.text}>
        {formatStatus(task.status)}
      </Text>

      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() =>
            handleStatusChange(
              "in_progress"
            )
          }
        >
          <Text style={styles.actionText}>
            In Progress
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() =>
            handleStatusChange(
              "completed"
            )
          }
        >
          <Text style={styles.actionText}>
            Complete
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() =>
            handleStatusChange(
              "cancelled"
            )
          }
        >
          <Text style={styles.actionText}>
            Cancel
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.actionButton,
            styles.deleteButton,
          ]}
          onPress={() =>
            Alert.alert(
              "Delete task",
              "Are you sure?",
              [
                {
                  text: "Cancel",
                  style: "cancel",
                },

                {
                  text: "Delete",
                  style: "destructive",
                  onPress:
                    handleDelete,
                },
              ]
            )
          }
        >
          <Text style={styles.actionText}>
            Delete
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f2f4f7",
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 20,
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#6b7280",
    marginTop: 16,
    marginBottom: 4,
  },

  text: {
    fontSize: 16,
    color: "#111827",
  },

  actions: {
    marginTop: 32,
    gap: 12,
  },

  actionButton: {
    backgroundColor: "#111827",
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
  },

  deleteButton: {
    backgroundColor: "#ef4444",
  },

  actionText: {
    color: "#fff",
    fontWeight: "600",
  },
});