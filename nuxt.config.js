module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Blocks for Change Lite',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: '1',
        name: 'Blocks for Change',
        content: 'A charitable blockchain project from Hello Leia',
        keywords: 'blockchain, cryptocoins, machine learning, chatbots, messenger, español'
       }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Mono' }
    ],
    script: [
      { src: 'https://authedmine.com/lib/authedmine.min.js'},
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['faLinkedin', 'faGithub', 'faMediumM']
      },
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
      {
        set: '@fortawesome/free-regular-svg-icons',
        icons: ['far']
      }
    ]
  },
  modules: [
    ['nuxt-buefy', {materialDesignIcons: false}],
    ['nuxt-fontawesome']
  ],
  plugins: [
    {src: '~/plugins/aos', ssr: false}
  ]
}

