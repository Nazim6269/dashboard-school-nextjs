import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        nazimSky: '#C3EBFA',
        nazimSkyLight: '#EDF9FD',
        nazimPurple: '#CFCEFF',
        nazimPurpleLight: '#F1F0FF',
        nazimYellow: '#FAE27C',
        nazimYellowLight: '#FEFCE8',
      },
    },
  },
  plugins: [],
};
export default config;
