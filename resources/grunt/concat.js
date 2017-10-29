var paths = require('../grunt-vars')

module.exports = {
  options: {
    sourceMap: true,
    sourceMapStyle: 'inline'
  },
  modules: {
    src: [paths.buildCssModulesPreConcat + '**/*.css'],
    dest: paths.distCss + paths.pkg.name + '.css'
  },
  print: {
    src: [paths.buildCssPrintPostLess + '**/*.css'],
    dest: paths.distCss + paths.pkg.name + '-print.css'
  }
}
