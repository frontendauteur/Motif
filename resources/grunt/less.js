var paths = require('../grunt-vars')

module.exports = {
  modules: {
    options: {
      paths: [paths.sourceLess, paths.sourceLess + 'components', paths.sourceLess + 'resources/less', paths.sourceLess + 'resources/less/config'],
      sourceMap: true,
      sourceMapRootpath: '../../../',
      sourceMapBasepath: paths.sourceDir,
      sourceMapFileInline: true,
      cleancss: false,
      outputSourceFiles: true,
      report: 'gzip'
    },
    files: [{
      expand: true,
      cwd: paths.sourceLess,
      src: ['**/resources/less/**/*.less', '**/components/**/*.less', '!**/_print.less', '!**/_config.less', '!**/_config-proto.less'],
      dest: paths.buildCssModulesPostLess,
      ext: '.css'
    }]
  },

  print: {
    options: {
      cleancss: false,
      report: 'gzip'
    },
    files: [{
      expand: true,
      cwd: paths.sourceLess,
      src: ['**/print/_print.less'],
      dest: paths.buildCssPrintPostLess,
      ext: '.css'
    }]
  }
}
