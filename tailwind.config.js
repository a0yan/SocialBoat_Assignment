module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
        screens: {
          'md':{'min':'480px','max':'767px'},
          'lg':{'min':'768px','max':'1023px'},
          'xl':{'min':'1024px'}

        },
        fontFamily:{
          'sans':['Poppins', 'sans-serif']
        },
      },
      plugins: [
        require('tw-elements/dist/plugin')
      ],
}