/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily:{
      roboto : ['Roboto Condensed','sans-serif'],
      openDyslexy : ['Open Dyslexic', 'sans-serif']
    },
    extend: {
      colors:{
        'light-green':'#D6E0DD',
        'dark-green':'var(--dark-green)',
      }
    },
  },

}

