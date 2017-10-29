'use strict'

var grunt = require('grunt')
var config = {}

// Package Info
config.pkg = grunt.file.readJSON('package.json')

// Base Direcories
config.project = config.pkg.name
config.sourceDir = ''
config.projectDir = config.sourceDir + '../'
config.buildDir = config.sourceDir + 'tmp/'
config.distDir = config.projectDir + 'public/'
config.componentsDir = config.projectDir + 'components/'

// Distribution
config.distCss = config.distDir + 'css/'
config.distFonts = config.distDir + 'fonts/'
config.distJs = config.distDir + 'js/'
config.distIcons = config.distDir + 'icons/'
config.distImages = config.distDir + 'images/'
config.distSvg = config.distDir + 'svg/'

// Build - temporary directories
config.buildLess = config.buildDir + 'less/'
config.buildSass = config.buildDir + 'scss/'
config.buildCss = config.buildDir + 'css/'
config.buildCssModulesPostLess = config.buildCss + 'modules-from-less/'
config.buildCssModulesPreConcat = config.buildCss + 'modules-for-concat/'
config.buildCssPrintPostLess = config.buildCss + 'print-from-less/'
config.buildFonts = config.buildDir + 'fonts/'
config.buildJs = config.buildDir + 'js/'
config.buildIcons = config.buildDir + 'icons/'
config.buildZip = config.buildDir + 'zip/'
config.buildsvg = config.buildDir + 'svg/'

// Source
config.sourceLess = config.projectDir
config.sourceJs = config.sourceDir + 'js/'
config.sourceFonts = config.sourceDir + 'fonts/'
config.sourceIcons = config.sourceDir + 'icons/'
config.sourceImages = config.sourceDir + 'images/'
config.sourceSvg = config.sourceDir + 'svg/'

// Brand.ai URLs
// config.brandIcons = 'https://assets.brand.ai/perot-museum/perot-museum-primary/icons.zip?key=ryVwq9sr-'
// config.brandStyles = 'https://assets.brand.ai/perot-museum/perot-museum-primary/style-params.less?key=ryVwq9sr-'

// Export Ver Config Object
module.exports = config
