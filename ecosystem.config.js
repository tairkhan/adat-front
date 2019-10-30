const Package = require('./package.json')

module.exports = {
  apps: [{
    name: Package.name,
    script: 'npm run start',
    watch: true,
    max_memory_restart: '200M'
  }],

  deploy: {
    staging: {
      ssh_options: ['ForwardAgent=yes', 'port=25333'],
      user: 'developer',
      host: ['10.12.91.47'],
      ref: 'origin/master',
      repo: 'git@github.com:AdiletSot/adat-front.git',
      path: '/home/developer/adat-front',
      'post-deploy': 'npm ci && npm run build && pm2 startOrGracefulReload ecosystem.config.js'
    }
  }
}
