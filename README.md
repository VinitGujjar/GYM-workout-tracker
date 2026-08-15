# GYM Workout Tracker

**Free Android Workout Tracker**

A dark, modern, gym-focused workout tracker built for lifters who want serious tracking without the subscription paywalls.

---

## Features

- Workout tracking
- Custom workout plans
- Exercise library
- Weight + reps tracking
- Bodyweight exercise tracking
- Timed exercises (Plank, Wall Sit, etc.)
- Cardio tracking (Treadmill, Cycling, etc.)
- Rest timer (floating, always accessible)
- Workout history
- Progress tracking with charts
- Personal records / progress insights
- Custom "Top Exercises" for your PR section
- Water tracking
- Daily water goal
- Water history
- Water reminders with custom intervals and sounds
- Creatine hydration tracking
- Firebase/Google account sync
- Offline/local data storage
- Dark modern gym-focused UI
- Free to use

---

## Download Android App

**Latest APK:**
https://github.com/VinitGujjar/GYM-workout-tracker/releases/latest

The app is free to use.

### About distribution

This app is distributed through **GitHub Releases** rather than the Google Play Store.

When a new version is released, the app checks GitHub automatically and will notify you inside the app with an **Update Now** button that opens the latest GitHub Release page. From there you can download and install the new APK directly.

Since the app isn't from the Play Store, Android may ask you to **allow installation from this source** the first time you install or update — this is expected and safe for a self-distributed APK.

---

## Building from source

```
npm install
npx cap sync android
```

Then build the debug/release APK from Android Studio, or via:

```
npm run android:debug
npm run android:release
```

---

## Contributing / Issues

This is a personal project actively developed by [@VinitGujjar](https://github.com/VinitGujjar). Feel free to open an issue if you run into a bug.
