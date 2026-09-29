# 🏋️ FitLog - Modern Workout Tracker & Gym Companion

> **Train with intent. Log every set.**  
> FitLog is a sleek, dark-themed gym companion and workout planning web application designed to help fitness enthusiasts discover exercises, plan daily routines, track workouts, and monitor training volume effortlessly.

---

## 📖 Short Description

**FitLog** is a responsive, fast, and intuitive fitness web application built with Next.js and TypeScript. It offers an organized library of exercises covering major muscle groups, comprehensive exercise breakdowns, and an interactive workout planning dashboard. Users can add lifts to their daily routine ("Today's Plan"), save exercises for later sessions, sort workouts dynamically, and mark completed sets—all with instantaneous real-time metrics for duration and calorie expenditure.

---

## 🛠️ Technologies Used

FitLog is engineered with modern web technologies for peak performance, responsiveness, and developer ergonomics:

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Server & Client Components, Dynamic Routing)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Static type safety & strict interface definitions)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & [DaisyUI 5](https://daisyui.com/)
- **State Management**: React Context API (`WorkoutsContext`)
- **Notifications**: [React-Toastify](https://fkhadra.github.io/react-toastify/) & [React Hot Toast](https://react-hot-toast.com/)
- **Typography & Assets**: Custom typography featuring Oswald and Geist fonts, optimized Next.js Image component

---

## ⚡ 5 Key Features

### 1. 📚 Comprehensive Workout Library
Browse a curated catalog of exercises covering every major muscle group (Chest, Back, Legs, Shoulders, Arms, and Core). Each workout card displays muscle tags, equipment requirements, estimated duration, caloric burn, and user ratings at a glance.

### 2. 🔍 In-Depth Workout Breakdown & Step-by-Step Instructions
Dedicated dynamic route pages (`/workouts/[id]`) provide rich details for each exercise:
- Muscle group targets and equipment specifications
- Difficulty tier (Beginner, Intermediate, Advanced)
- Sets, reps recommendations, and expected calorie burn
- Step-by-step instructional guides for proper lifting form and safety

### 3. 🎯 "Today's Plan" Routine Builder & Completion Tracker
Easily add workouts to your active daily plan. Users can track their session in real-time, view their active routine, and click **"Mark as Done"** to log completed exercises with instant visual feedback and toast notifications.

### 4. 📌 "Save for Later" Bookmarking System
Organize future training sessions by bookmarking lifts into a dedicated **"Saved"** collection. Seamlessly switch between today's active plan and saved exercises with intuitive tab switching.

### 5. 📊 Real-Time Session Analytics & Dynamic Sorting
The **My Plan** dashboard calculates aggregate workout stats live:
- **Total Exercises**: Number of lifts queued in the routine
- **Total Duration**: Cumulative session workout time (in minutes)
- **Total Calories Burned**: Estimated energy expenditure (in kcal)
- **Multi-Criteria Sorting**: Sort active or saved workouts on the fly by **Duration**, **Calories**, or **Rating**.

---