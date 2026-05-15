import { useState } from "react";

import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import { v4 as uuid } from "uuid";

import { Task } from "../types/task";
import { addTask } from "../storage/tasksStorage";

export default function CreateTaskScreen() {
  const navigation = useNavigation<any>();

  const [title, setTitle] = useState("");
  const [description, setDescription] =
    useState("");
  const [address, setAddress] = useState("");
  const [dueDate, setDueDate] = useState("");

  async function handleCreateTask() {
    if (
      !title.trim() ||
      !description.trim() ||
      !address.trim() ||
      !dueDate.trim()
    ) {
      return;
    }

    const newTask: Task = {
      id: uuid(),

      title,
      description,
      address,
      dueDate,

      createdAt: new Date().toISOString(),

      status: "in_progress",
    };

    await addTask(newTask);

    navigation.goBack();
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={
        Platform.OS === "ios"
          ? "padding"
          : undefined
      }
      keyboardVerticalOffset={100}
    >
      <ScrollView
        contentContainerStyle={[
          styles.container,
          { flexGrow: 1 },
        ]}
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
          style={[
            styles.input,
            styles.textArea,
          ]}
          multiline
        />

        <TextInput
          placeholder="Address"
          value={address}
          onChangeText={setAddress}
          style={styles.input}
        />

        <TextInput
          placeholder="Due date (ex: 2026-05-20 14:00)"
          value={dueDate}
          onChangeText={setDueDate}
          style={styles.input}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleCreateTask}
        >
          <Text style={styles.buttonText}>
            Create Task
          </Text>
        </TouchableOpacity>
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

  button: {
    backgroundColor: "#111827",

    borderRadius: 12,

    paddingVertical: 16,

    alignItems: "center",

    marginTop: 8,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});