# Task Manager — Мобильное приложение для управления задачами

[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![React Native](https://img.shields.io/badge/React%20Native-0.74-blue)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-51-black)](https://expo.dev/)
[![React Navigation](https://img.shields.io/badge/React%20Navigation-Enabled-purple)](https://reactnavigation.org/)
![AsyncStorage](https://img.shields.io/badge/AsyncStorage-Enabled-green)
![APK](https://img.shields.io/badge/APK-Available-success)

<p align="left">
  <a href="README.md">Switch to English</a>
</p>

## 📋 О проекте

Task Manager — это мобильное приложение на React Native для создания и управления рабочими задачами прямо с мобильного устройства.

Проект демонстрирует:

* Архитектуру мобильного приложения на React Native
* Локальное хранение данных с помощью AsyncStorage
* Стек-навигацию с React Navigation
* Валидацию форм и обработку ошибок
* Сортировку задач и управление статусами
* Чистый и адаптивный мобильный интерфейс


## ⚙️ Возможности

* Создание задач
* Просмотр деталей задачи
* Изменение статуса задачи
* Удаление задач
* Сортировка задач по дате или статусу
* Локальное хранение данных
* Валидация даты и времени
* Форматированный ввод даты
* Обработка пустого состояния


## 🛠️ Технологический стек

* React Native
* Expo
* TypeScript
* React Navigation
* AsyncStorage
* date-fns
* UUID


## 📸 Демонстрационное видео

<img src="assets/demo.gif" width="50%"/>

Демо-видео показывает:

* Создание задачи
* Обработку валидации
* Сортировку
* Обновление статуса задачи
* Удаление задачи
* Сохранение данных после перезапуска приложения


## 🧱 Структура проекта

<details>
<summary>Нажмите, чтобы развернуть</summary>

src/<br>
├── components/      # Переиспользуемые UI-компоненты<br>
├── constants/       # Тестовые данные и константы<br>
├── navigation/      # Конфигурация навигации<br>
├── screens/         # Экраны приложения<br>
├── storage/         # Логика работы с AsyncStorage<br>
├── types/           # Типы TypeScript<br>
└── utils/           # Вспомогательные функции<br>

</details>

## 📱 Функциональность приложения

### Управление задачами

Приложение позволяет:

* Создавать задачи с указанием:
  * Названия
  * Описания
  * Адреса
  * Запланированной даты и времени

* Просматривать подробную информацию о задаче
* Изменять статус задачи:
  * В процессе
  * Завершена
  * Отменена

* Удалять задачи
* Сортировать задачи по:
  * Дате
  * Статусу

---

## 💾 Локальное хранение данных

Все задачи хранятся локально с использованием AsyncStorage.

Особенности:

* Задачи сохраняются после перезапуска приложения
* Начальные тестовые задачи загружаются только при первом запуске
* Данные автоматически обновляются при изменении задач

---

## 🧩 Улучшения UI и UX

Реализованные улучшения интерфейса:

* Плавающая кнопка действия (FAB)
* Цветные индикаторы статуса
* Валидация форм
* Цифровая клавиатура для ввода даты
* Автоматическое форматирование даты
* Экран пустого состояния
* Адаптивная мобильная вёрстка
* Поведение с учётом клавиатуры для небольших экранов

---

## 📅 Валидация даты

Приложение проверяет:

* Корректность формата даты
* Существование даты в календаре
* Правильность значений времени

---

## 🖐️ Ручная настройка проекта

Требования:
* Node.js
* npm
* Expo Go app (опционально)

#### 1. Клонируйте репозиторий:
```bash
git clone https://github.com/paper-apple/task-manager-mobile.git
cd task-manager-mobile
```

#### 2. Установите зависимости:
```bash
npm install
```

#### 3. Запустите сервер разработки:
```bash
npx expo start
```

#### 4. Запустите приложение:

Приложение можно запустить с помощью:

* Expo Go на мобильном устройстве
* Android Emulator
* iOS Simulator


#### 📦 Сборка APK
APK-файл был сгенерирован с использованием Expo EAS Build.

Команда для сборки:

```bash
eas build -p android --profile preview
```

APK-файл прилагается отдельно.


## 🧪 Валидация и обработка ошибок

Проект включает:

* Проверку обязательных полей
* Предотвращение ввода некорректной даты
* Блокировку кнопки отправки при неверном вводе
* Безопасные операции с AsyncStorage через try/catch
* Подтверждение через Alert перед удалением задачи


## 🧩 Обзор архитектуры

#### Поток данных в приложении:

Экран → Форма/Ввод → Состояние → AsyncStorage → Обновление UI

#### Поток хранения данных:

Создание/Обновление/Удаление задачи<br>
↓<br>
Обновление AsyncStorage<br>
↓<br>
Обновление экрана<br>
↓<br>
Обновлённый список задач


## 📦 APK Download

Ссылка на Google Drive:
[LINK](https://drive.google.com/file/d/1gnbwxS1jigwVk1M42i8JB_7Vn4YxamLt/view?usp=sharing)


## 📞 Contact

[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](birdcherrytea@gmail.com)</br>
[![Telegram](https://img.shields.io/badge/Telegram-26A5E4?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/submarino_amarillo)</br>
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/dzmitry-paklonski/)