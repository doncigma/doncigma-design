/** @type {import('tailwindcss').Config} */
export default {
content: [],
   theme: {
      extend: {
         colors: {
            'mexicanred': {
               50: '#DE9484',
               100: '#D87B6C',
               200: '#CB463B',
               300: '#9F2A2A',
               400: '#83232A',
               500: '#661B26',
               600: '#4A1420',
               700: '#2E0C16',
               800: '#12050A',
               900: '#000000',
               950: '#000000'
            },
         },
         spacing: {
            '112': '28rem',
            '128': '32rem',
            '144': '36rem',
            '160': '40rem',
            '176': '44rem',
            '192': '48rem',
            '206': '52rem',
            'massive': '64rem',
            'holyshit': '74rem',
            'itappearstobeabigone': '82rem',
            'fuckinmassive': '96rem'
         }
      },
   },
   plugins: [
      require('daisyui'),
   ],
}
