// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Config = {
  content: ["./app/**/*.tsx", "./src/**/*.tsx"],
  presets: [sharedConfig],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 12s linear infinite",
        "pulse-scale": "scale 8s ease-in-out infinite",
      },
      keyframes: {
        scale: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
      },
    },
  },
};

export default config;
