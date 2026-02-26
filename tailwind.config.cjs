/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#07202b',
          90: '#0a2a38',
          70: '#1a3d4d',
        },
        accent: {
          DEFAULT: '#f17021',
          dark: '#d9631d',
          light: '#f58d4d',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.600'),
            a: {
              color: theme('colors.accent.DEFAULT'),
              '&:hover': {
                color: theme('colors.accent.dark'),
              },
            },
            h1: { color: theme('colors.dark.DEFAULT') },
            h2: { color: theme('colors.dark.DEFAULT') },
            h3: { color: theme('colors.dark.DEFAULT') },
            h4: { color: theme('colors.dark.DEFAULT') },
            strong: { color: theme('colors.dark.DEFAULT') },
            code: {
              color: theme('colors.accent.DEFAULT'),
              backgroundColor: theme('colors.gray.100'),
              padding: '0.25rem 0.5rem',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            blockquote: {
              borderLeftColor: theme('colors.accent.DEFAULT'),
              color: theme('colors.gray.600'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
