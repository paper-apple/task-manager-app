import {
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import {
  useNavigation,
  useFocusEffect,
} from "@react-navigation/native";
import { 
  useEffect, 
  useState,
  useCallback,
  useMemo,
} from "react";
import TaskCard from "../components/TaskCard";
import { mockTasks } from "../constants/mockTasks";
import { Task } from "../types/task";
import {
  loadTasks,
  saveTasks,
} from "../storage/tasksStorage";
import { parse } from "date-fns";

export default function TasksScreen() {
  const navigation = useNavigation<any>();

  const [tasks, setTasks] =
    useState<Task[]>([]);

  const [sortBy, setSortBy] =
    useState<"date" | "status">(
      "date"
    );

  useFocusEffect(
    useCallback(() => {
      async function fetchTasks() {
        const storedTasks =
          await loadTasks();

        if (storedTasks.length > 0) {
          setTasks(storedTasks);
        } else {
          setTasks(mockTasks);
        }
      }

      fetchTasks();
    }, [])
  );

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const sortedTasks = useMemo(() => {
    const copiedTasks = [...tasks];

    if (sortBy === "status") {
      return copiedTasks.sort((a, b) =>
        a.status.localeCompare(b.status)
      );
    }

    return copiedTasks.sort((a, b) => {
      const dateA = parse(
        a.taskDate,
        "dd.MM.yyyy HH:mm",
        new Date()
      ).getTime();

      const dateB = parse(
        b.taskDate,
        "dd.MM.yyyy HH:mm",
        new Date()
      ).getTime();

      return dateB - dateA;
    });
  }, [tasks, sortBy]);

  return (
    <View style={styles.container}>
      <View style={styles.sortContainer}>
        <TouchableOpacity
          style={[
            styles.sortButton,
            sortBy === "date" &&
              styles.activeSortButton,
          ]}
          onPress={() => setSortBy("date")}
        >
          <Text
            style={[
              styles.sortButtonText,
              sortBy === "date" && {
                color: "#fff",
              },
            ]}
          >
            Sort by date
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.sortButton,
            sortBy === "status" &&
              styles.activeSortButton,
          ]}
          onPress={() =>
            setSortBy("status")
          }
        >
          <Text
            style={[
              styles.sortButtonText,
              sortBy === "status" && {
                color: "#fff",
              },
            ]}
          >
            Sort by status
          </Text>
        </TouchableOpacity>
      </View>
      
      <FlatList
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              No tasks yet.
              Tap + to create your first task.
            </Text>
          </View>
        }
        data={sortedTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskCard task={item} />
        )}
        contentContainerStyle={styles.list}
      />

      <TouchableOpacity
        style={styles.fab}
        onPress={() =>
          navigation.navigate("CreateTask")
        }
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f4f7",
  },

  list: {
    padding: 16,
    paddingBottom: 100,
  },

  fab: {
    position: "absolute",
    right: 20,
    bottom: 30,

    width: 60,
    height: 60,

    borderRadius: 999,

    backgroundColor: "#111827",

    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowOpacity: 0.2,
    shadowRadius: 6,

    elevation: 5,
  },

  fabText: {
    color: "#fff",
    fontSize: 30,
    marginTop: -2,
  },

  sortContainer: {
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  sortButton: {
    backgroundColor: "#e5e7eb",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 10,
  },

  activeSortButton: {
    backgroundColor: "#111827",
  },

  sortButtonText: {
    color: "#111827",
    fontWeight: "600",
  },

  emptyContainer: {
    marginTop: 80,
    alignItems: "center",
  },

  emptyText: {
    fontSize: 16,
    color: "#6b7280",
  },
});