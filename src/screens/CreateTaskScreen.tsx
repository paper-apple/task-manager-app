import { useRef, useState } from "react";
import {
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  View,
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { v4 as uuid } from "uuid";
import { Task } from "../types/task";
import { addTask } from "../storage/tasksStorage";
import { isValidDateFormat } from "../utils/isValidDateFormat";
import { formatDateInput } from "../utils/formatDateInput";

export default function CreateTaskScreen() {
  const navigation = useNavigation<any>();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [errorToast, setErrorToast] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const opacity = useRef(new Animated.Value(0)).current;

  const showToast = (message: string) => {
    setErrorToast(message);
    setToastVisible(true);
    
    Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
    }).start();
    
    setTimeout(() => {
        Animated.timing(opacity, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
        }).start(() => setToastVisible(false));
    }, 2000);
  };

  async function handleCreateTask() {
    const errors: string[] = [];

    if (
      !title.trim() ||
      !description.trim() ||
      !address.trim() ||
      !taskDate.trim()
    ) {
      errors.push("Fill in all the input fields");
    }

    if (taskDate.trim() && !isValidDateFormat(taskDate)) {
      errors.push("Invalid date");
    }

    if (errors.length > 0) {
      showToast(errors.join(", "));
      return;
    }

    const newTask: Task = {
      id: uuid(),
      title,
      description,
      address,
      taskDate,
      status: "in_progress",
    };

    await addTask(newTask);

    navigation.goBack();
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={100}
    >
      <ScrollView
        contentContainerStyle={[styles.container, { flexGrow: 1 }]}
        keyboardShouldPersistTaps="handled"
      >
        <TextInput
          placeholder="Task title"
          value={title}
          onChangeText={setTitle}
          style={styles.input}
        />

        <TextInput
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
          style={[styles.input, styles.textArea]}
          multiline
        />

        <TextInput
          placeholder="Address"
          value={address}
          onChangeText={setAddress}
          style={styles.input}
        />

        <TextInput
          placeholder="Date"
          value={taskDate}
          onChangeText={(text) => setTaskDate(formatDateInput(text))}
          keyboardType="numeric"
          maxLength={16}
          style={styles.input}
        />

        <View style={styles.buttonWrapper}>
          {toastVisible && (
            <Animated.View style={[styles.toast, { opacity }]}>
                <Text style={styles.toastText}>{errorToast}</Text>
            </Animated.View>
          )}

          <TouchableOpacity style={styles.button} onPress={handleCreateTask}>
            <Text style={styles.buttonText}>Create Task</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 120,
  },

  input: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 14,
    fontSize: 16,
  },

  textArea: {
    minHeight: 120,
    textAlignVertical: "top",
  },

  toast: {
    position: "absolute",
    bottom: "100%",
    left: 0,
    right: 0,
    backgroundColor: "#ef4444",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    marginBottom: 10,
    alignItems: "center",
    zIndex: 10,
  },

  toastText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
  },

  buttonWrapper: {
    marginTop: 8,
    position: "relative",
  },

  button: {
    backgroundColor: "#111827",
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});