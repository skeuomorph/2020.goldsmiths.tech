
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Hacksmiths',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Hacksmiths is the student-run tech society at Goldsmiths, University of London.' },
      { property: 'description', content: 'Hacksmiths is the student-run tech society at Goldsmiths, University of London.' },
      { property: 'og:image', content: 'https://goldsmiths.tech/og.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap' },
      { rel: 'stylesheet', href: "https://use.fontawesome.com/releases/v5.3.1/css/all.css", crossorigin: 'anonymous', integrity: 'sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/moment.js'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  generate: {
    routes: [
      '/',
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
