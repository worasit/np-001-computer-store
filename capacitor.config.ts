import {CapacitorConfig} from "@capacitor/cli";

const config: CapacitorConfig = {
    appId: "io.ionic.starter",
    appName: "computerstore",
    webDir: "build",
    bundledWebRuntime: false,
    plugins: {
        SplashScreen: {
            launchShowDuration: 5000,
            launchAutoHide: true
        }
    }
};

export default config;
