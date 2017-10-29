var paths = require('../grunt-vars')
module.exports = {
  options: {
    force: true
  },
  modulesPreLess: [paths.buildCssModulesPostLess + '*'],
  modulesPreTranspile: [paths.buildCssModulesPreConcat + '*', paths.distCss + '**/*.json', paths.distJs + 'styles.js']
}
