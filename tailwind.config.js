module.exports = {
  purge: {
    content: [
      './layouts/**/*.html',
      './content/**/*.md',
      './content/**/*.html'
    ]
  },
  theme: {
    fontFamily: {
      sans: [
        'Inter',
        'Roboto',
        'Helvetica Neue',
        'sans-serif'
      ],
      serif: [
        'Georgia',
        'Cambria',
        'Times New Roman',
        'Times',
        'serif'
      ],
      mono: [
        'Menlo',
        'Monaco',
        'monospace'
      ]
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography')
  ]
}
