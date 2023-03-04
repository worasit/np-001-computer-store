# np-001-computer-store

PWAs application of a computer store

## New Project set up

```shell
# Install Ionic and set up ReactJS project
npm install -g @ionic/cli
ionic start computerstore tabs --type react
ionic serve

# Create Native project for Android and iOS
ionic capacitor add android
ionic capacitor add ios

# Sync the web app to native mobiles
npm run build
npx cap sync

```

## Testing your Capacitor app

```shell
npx cap run ios
npx cap run android

```

## Open your Native IDE

```shell
npx cap open ios
npx cap open android

```

## Using Capacitor with Ionic Framework

```shell
npm install -g @ionic/cli

```

## How to hide ion-tabs on Login screen

https://stackoverflow.com/questions/62359500/hide-tabs-on-login-screen-in-ionic-react

### Learning Courses

- https://pro.academind.com/p/ionic-react-build-cross-platform-apps-web-android-ios