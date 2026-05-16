import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Task } from "../types/task";
import { formatStatus } from "../utils/formatStatus";
import {
  format,
  parse,
} from "date-fns";

interface Props {
  task: Task;
}

export default function TaskCard({
  task,
}: Props) {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() =>
        navigation.navigate(
          "TaskDetails",
          {
            taskId: task.id,
          }
        )
      }
    >
      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.title}>
            {task.title}
          </Text>

          <View
            style={[
              styles.badge,
              styles[task.status],
            ]}
          >
            <Text style={styles.badgeText}>
              {formatStatus(task.status)}
            </Text>
          </View>
        </View>

        <Text style={styles.date}>
          {format(
            parse(
              task.taskDate,
              "dd.MM.yyyy HH:mm",
              new Date()
            ),
            "dd.MM.yyyy HH:mm"
          )}
        </Text>

        <Text style={styles.address}>
          {task.address}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#f3f4f6",
    padding: 18,
    marginBottom: 12,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.1,
    shadowRadius: 4,

    elevation: 3,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
    flex: 1,
  },

  date: {
    marginTop: 8,
    color: "#666",
  },

  address: {
    marginTop: 4,
    color: "#444",
  },

  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
  },

  badgeText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "600",
    textTransform: "uppercase",
  },

  pending: {
    backgroundColor: "#f59e0b",
  },

  in_progress: {
    backgroundColor: "#3b82f6",
  },

  completed: {
    backgroundColor: "#10b981",
  },

  cancelled: {
    backgroundColor: "#ef4444",
  },
});