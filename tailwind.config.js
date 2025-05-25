import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  plugins: [daisyui],
  theme: {
    extend: {},
  },
  // corePlugins: {
  //   preflight: false, // Only disable if you really need to
  // },
};
