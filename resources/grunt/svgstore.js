var paths = require('../grunt-vars')
var distFiles = {}

distFiles[paths.distIcons + 'icons-sprite.svg'] = paths.buildIcons + '*.svg'

module.exports = {
  options: {
    includedemo: true,
    svg: {
      style: 'width:0;height:0;visibility:hidden;position:absolute;'
    }
  },
  icons: {
    files: distFiles
  }
}
