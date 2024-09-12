module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'mono': ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      colors: {
        'vscode-dark': {
          DEFAULT: '#1E1E1E',
          'text': '#D4D4D4',
          'comment': '#6A9955',
          'keyword': '#C586C0',
          'function-name': '#DCDCAA',
          'number': '#B5CEA8',
          'string': '#CE9178',
          'entity': '#569CD6',
          'match': '#C586C0',
          'green': '#7AF8CA',
          'purple': '#C099FF',
          'background': '#1c1e30', // default background color
          'hover': '#303454',
          'border': '#506477', // default border color Cmd+Shift+F when changing to get SVG cases.
          // 'border': '#3C3C3C', // default border color
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}