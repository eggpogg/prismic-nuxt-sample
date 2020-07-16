export default {
  mode: 'universal',
  target: 'static',
  head: {
    title: 'Prismic + Nuxt Blog example',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Prismic + Nuxt Blog example' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:300,400,700,900' }
    ]
  },
  loading: { color: '#fff' },
  css: [
    '@/assets/css/resetr.css',
    '@/assets/css/common.css'
  ],
  plugins: [
  ],
  modules: [
    '@nuxtjs/prismic'
  ],
  prismic: {
    endpoint: 'https://dev-sample-06.cdn.prismic.io/api/v2',
    linkResolver: '@/plugins/link-resolver',
    htmlSerializer: '@/plugins/html-serializer',
  },
  build: {
    extend(config, ctx) {
      config.resolve.alias['vue'] = 'vue/dist/vue.common'
    }
  },
}
