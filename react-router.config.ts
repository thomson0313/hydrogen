import type {Config} from '@react-router/dev/config';
import {hydrogenPreset} from '@shopify/hydrogen/react-router-preset';
import {vercelPreset} from '@vercel/react-router/vite';

/**
 * Local/Oxygen: Hydrogen preset.
 * Vercel: Vercel preset only (Hydrogen preset conflicts with vercelPreset serverBundles).
 */
export default (process.env.VERCEL
  ? {
      appDirectory: 'app',
      buildDirectory: 'dist',
      ssr: true,
      presets: [vercelPreset()],
    }
  : {
      presets: [hydrogenPreset()],
    }) satisfies Config;
