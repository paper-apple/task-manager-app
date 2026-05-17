import { useCallback, useEffect, useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";

import {
  useFocusEffect,
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

  const [task, setTask] = useState<Task | null>(null);

  async function fetchTask() {
    const tasks = await loadTasks();

    const currentTask = tasks.find((item) => item.id === taskId);

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

  async function handleStatusChange(status: Task["status"]) {
    if (!task) {
      return;
    }

    await updateTaskStatus(task.id, status);

    await fetchTask();
  }

  if (!task) {
    return null;
  }

  function getStatusButtonStyle(status: Task["status"]) {
    if (task?.status === status) {
      return [styles.actionButton, styles.activeButton];
    }
    return [styles.actionButton, styles.inactiveButton];
  }

  function getStatusTextStyle(status: Task["status"]) {
    if (task?.status === status) {
      return [styles.actionText, styles.activeText];
    }
    return [styles.actionText, styles.inactiveText];
  }

  return (
    <View style={styles.wrapper}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>{task.title}</Text>

        <Text style={styles.label}>Description</Text>
        <Text style={styles.text}>{task.description}</Text>

        <Text style={styles.label}>Address</Text>
        <Text style={styles.text}>{task.address}</Text>

        <Text style={styles.label}>Task date</Text>
        <Text style={styles.text}>{task.taskDate}</Text>

        <Text style={styles.label}>Current status</Text>
        <Text style={styles.text}>{formatStatus(task.status)}</Text>
      </ScrollView>

      <View style={styles.actions}>
        <TouchableOpacity
          style={getStatusButtonStyle("in_progress")}
          onPress={() => handleStatusChange("in_progress")}
        >
          <Text style={getStatusTextStyle("in_progress")}>In progress</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={getStatusButtonStyle("completed")}
          onPress={() => handleStatusChange("completed")}
        >
          <Text style={getStatusTextStyle("completed")}>Complete</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={getStatusButtonStyle("cancelled")}
          onPress={() => handleStatusChange("cancelled")}
        >
          <Text style={getStatusTextStyle("cancelled")}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionButton, styles.deleteButton]}
          onPress={() =>
            Alert.alert("Delete task", "Are you sure?", [
              { text: "Cancel", style: "cancel" },
              { text: "Delete", style: "destructive", onPress: handleDelete },
            ])
          }
        >
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#f2f4f7",
  },

  scrollView: {
    flex: 1,
  },

  scrollContent: {
    padding: 16,
    paddingBottom: 8,
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
    padding: 16,
    paddingTop: 8,
    gap: 12,
    backgroundColor: "#f2f4f7",
  },

  actionButton: {
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
  },

  activeButton: {
    backgroundColor: "#111827",
  },

  inactiveButton: {
    backgroundColor: "#e5e7eb",
  },

  deleteButton: {
    backgroundColor: "#ef4444",
  },

  actionText: {
    fontWeight: "600",
  },

  activeText: {
    color: "#fff",
  },

  inactiveText: {
    color: "#111827",
  },

  deleteText: {
    color: "#fff",
    fontWeight: "600",
  },
});