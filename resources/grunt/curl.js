var paths = require('../grunt-vars')
module.exports = {
  brandIcons: {
    src: paths.brandIcons,
    dest: paths.buildZip + 'icons.zip'
  },
  brandStyles: {
    src: paths.brandStyles,
    dest: paths.buildLess + '_style-params.less'
  }
}
