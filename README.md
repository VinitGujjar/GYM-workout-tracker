# GYM Workout Tracker

A mobile-first personal gym workout tracker for planning workouts, logging exercises, tracking progress, and keeping workout history.

**Created by:** its_vinitgujjar

## What Is Included

- Existing production website in `index.html`
- Capacitor Android wrapper
- Android package ID: `com.itsvinitgujjar.gymworkouttracker`
- Android app name: `GYM Workout Tracker`
- Firebase Web SDK cloud sync preserved
- Google Sign-In button and existing web auth code preserved
- Existing favicon/logo reused for Android launcher and splash resources

## Install Dependencies

Install Node.js first if it is not already installed.

```powershell
cd "D:\Study\Gym Tracker"
npm install
```

## Sync Website Into Android

`index.html` is the source of truth. After changing the website, run:

```powershell
npm run sync:web
npx cap sync android
```

This copies the current web files into `www`, then Capacitor copies them into the Android project.

## Open In Android Studio

```powershell
npx cap open android
```

## Build Debug APK

```powershell
npm run android:debug
```

Output:

```text
android/app/build/outputs/apk/debug/app-debug.apk
```

## Install Debug APK On A Phone

Enable USB debugging on the Android phone, connect it by USB, then run:

```powershell
adb install -r "android\app\build\outputs\apk\debug\app-debug.apk"
```

## Build Release APK

Unsigned release APK:

```powershell
npm run android:release
```

Output:

```text
android/app/build/outputs/apk/release/app-release-unsigned.apk
```

## Build Android App Bundle

Unsigned release AAB:

```powershell
npm run android:aab
```

Output:

```text
android/app/build/outputs/bundle/release/app-release.aab
```

For Play Store release, create a signing key locally or in your CI secret store. Do not commit `.jks`, `.keystore`, passwords, or signing configs with secrets.

## Firebase And Google Sign-In Setup

The app still uses the same Firebase project configured in `index.html`.

For Android Google Sign-In/Firebase Auth, add this Android app to Firebase:

1. Open [Firebase Console](https://console.firebase.google.com/).
2. Select the existing `gym-workout-tracker-c0955` project.
3. Go to **Project settings**.
4. In **Your apps**, click **Add app** and choose Android.
5. Enter package name: `com.itsvinitgujjar.gymworkouttracker`.
6. Enter app nickname: `GYM Workout Tracker`.
7. Get your debug SHA-1:

```powershell
cd "D:\Study\Gym Tracker\android"
.\gradlew signingReport
```

8. Copy the `SHA1` value for the `debug` variant into Firebase.
9. Also add `SHA-256` when Firebase offers it.
10. Download `google-services.json` if Firebase provides one and place it at:

```text
android/app/google-services.json
```

Do not commit private signing files or secrets.

Important: the existing app currently uses Firebase Web SDK `signInWithPopup`. Popup OAuth can be unreliable or blocked inside Android WebView. If Google Sign-In fails in the Android app after the SHA-1/SHA-256 setup, the next step is to add a Capacitor-native Google auth plugin or use a browser-based OAuth flow. Do that as a targeted auth compatibility change only; the existing website sign-in should remain unchanged.

## GitHub Actions

The workflow at `.github/workflows/android-debug.yml` installs dependencies, syncs Capacitor, builds a debug APK, and uploads it as an artifact. It does not store signing secrets.

## Website

https://vinitgujjar.github.io/GYM-workout-tracker/

## Version

v1.0 - Initial public build with Capacitor Android packaging.
