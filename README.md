# Task Manager Mobile App

[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![React Native](https://img.shields.io/badge/React%20Native-0.74-blue)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-51-black)](https://expo.dev/)
[![React Navigation](https://img.shields.io/badge/React%20Navigation-Enabled-purple)](https://reactnavigation.org/)
![AsyncStorage](https://img.shields.io/badge/AsyncStorage-Enabled-green)
![APK](https://img.shields.io/badge/APK-Available-success)

<p align="left">
  <a href="README.ru.md">Переключиться на русский язык</a>
</p>

## 📋 About the Project

Task Manager Mobile App is a React Native application for creating and managing work tasks directly from a mobile device.

The project demonstrates:

* Mobile application architecture with React Native
* Local data persistence using AsyncStorage
* Stack navigation with React Navigation
* Form validation and error handling
* Task sorting and status management
* Clean and responsive mobile UI


## ⚙️ Features

* Create tasks
* View task details
* Update task status
* Delete tasks
* Sort tasks by date or status
* Local storage persistence
* Date and time validation
* Formatted date input
* Empty state handling


## 🛠️ Tech Stack

* React Native
* Expo
* TypeScript
* React Navigation
* AsyncStorage
* date-fns
* UUID


## 📸 Demo Video

<img src="assets/demo.gif" width="50%"/>

The demo video demonstrates:

* Task creation
* Validation handling
* Sorting
* Task status updates
* Task deletion
* Persistence after app restart


## 🧱 Project Structure

<details>
<summary>Click to expand</summary>

src/<br>
├── components/      # Reusable UI components<br>
├── constants/       # Mock data and constants<br>
├── navigation/      # Navigation configuration<br>
├── screens/         # Application screens<br>
├── storage/         # AsyncStorage logic<br>
├── types/           # TypeScript types<br>
└── utils/           # Utility functions<br>

</details>


## 📱 Application Features

### Task Management

The application allows users to:

* Create tasks with:
  * Title
  * Description
  * Address
  * Scheduled date and time

* View detailed task information
* Update task status:
  * In Progress
  * Completed
  * Cancelled

* Delete tasks
* Sort tasks by:
  * Date
  * Status


## 💾 Local Data Persistence

All tasks are stored locally using AsyncStorage.

Features:

* Tasks remain after application restart
* Initial mock tasks are loaded only on first launch
* Data updates automatically after task changes


## 🧩 UI & UX Improvements

Implemented UI improvements include:

* Floating action button (FAB)
* Status badges with different colors
* Form validation
* Numeric keyboard for date input
* Automatic date formatting
* Empty state screen
* Responsive mobile layout
* Keyboard avoiding behavior for smaller screens


## 📅 Date Validation

The application validates:

* Date format correctness
* Existing calendar dates
* Correct time values

## 🖐️ Manual Project Setup

### Requirements
* Node.js
* npm
* Expo Go app (optional)

#### 1. Clone the repository:
```bash
git clone https://github.com/paper-apple/task-manager-mobile.git
cd task-manager-mobile
```

#### 2. Install dependencies:
```bash
npm install
```

#### 3. Start the development server:
```bash
npx expo start
```

#### 4. Run the application:
You can run the application using:
* Expo Go on a mobile device
* Android Emulator
* iOS Simulator


## 📦 APK Build

APK build was generated using Expo EAS Build.

Build command:
```bash
eas build -p android --profile preview
```

APK file is attached separately.


## 🧪 Validation & Error Handling

The project includes:

* Required field validation
* Invalid date prevention
* Disabled submit button for invalid input
* Safe AsyncStorage operations with try/catch
* Alert confirmation before task deletion


## 🧩 Architecture Overview

#### Application Flow:

Screen → Form/Input → State → AsyncStorage → UI Update

#### Storage Flow:

Create/Update/Delete Task<br>
↓<br>
AsyncStorage Update<br>
↓<br>
Screen Refresh<br>
↓<br>
Updated Task List


## 📦 APK Download

Google Drive link:
[LINK](https://drive.google.com/file/d/1gnbwxS1jigwVk1M42i8JB_7Vn4YxamLt/view?usp=sharing)


## 📞 Contact

[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](birdcherrytea@gmail.com)</br>
[![Telegram](https://img.shields.io/badge/Telegram-26A5E4?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/submarino_amarillo)</br>
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/dzmitry-paklonski/)