// Tailwind CSS v4 — PostCSS plugin replaces the old tailwindcss + autoprefixer setup.
// Lightning CSS handles vendor prefixing internally — no autoprefixer required.
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}

export default config
