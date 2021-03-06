import Analytics from 'analytics'

// Case for https://github.com/DavidWells/analytics/issues/25

const pluginOne = {
  name: 'pluginA',
  config: {
    test: 'A'
  },
  'page:pluginB': ({ config }) => {
    // config refers to pluginB's config!
    console.log('PluginOne', config.test) // prints B
    console.log(config)
  }
}

const pluginTwo = {
  name: 'pluginB',
  config: {
    test: 'B'
  },
  page: ({ config }) => {
    console.log('PluginTwo', config.test) // prints B
    console.log(config)
  }
}


/* initialize analytics and load plugins */
const analytics = Analytics({
  debug: true,
  app: 'yolo',
  plugins: [
    pluginOne,
    pluginTwo
  ]
})

// analytics.storage.setItem('wer', 'hi', 'cookie')

window.Analytics = analytics

/* export analytics for usage through the app */
export default analytics
