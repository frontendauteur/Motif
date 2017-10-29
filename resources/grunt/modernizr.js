var paths = require('../grunt-vars')

module.exports = {
  global: {
    dest: paths.buildJs + 'modernizr.js',
    crawl: true,
    customTests: [],
    tests: [],
    options: [
      'setClasses'
    ],
    uglify: false,
    files: {
      src: [
        'public/css/*.css',
        'js/**/*.js',
        '!js/vendor/*.js'
      ]
    }
  }
}
