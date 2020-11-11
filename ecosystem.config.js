module.exports = {
    apps: [
      {
        name: 'nuxt-cloudways-test',
        port: 3000,
        exec_mode: 'cluster',
        instances: 'max', // Or a number of instances
        script: './node_modules/nuxt/bin/nuxt.js',
        cwd: '/czarcqxbbu/public_html',
        args: 'start'
      }
    ]
  }