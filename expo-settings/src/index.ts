import {
  NativeModulesProxy,
  EventEmitter,
  Subscription,
} from 'expo-modules-core';
import ExpoSettingsModule from './ExpoSettingsModule';

// Import the native module. On web, it will be resolved to ExpoSettings.web.ts
// and on native platforms to ExpoSettings.ts

export function getTheme(): string {
  return ExpoSettingsModule.getTheme();
}
