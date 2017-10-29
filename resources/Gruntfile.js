module.exports = function (grunt) {
  var pkg = grunt.file.readJSON('package.json')

  // Load the plugins that provide the tasks.
  require('load-grunt-config')(grunt)

  grunt.registerTask('refresh', [
    'node_version',
    'concurrent:buildStep1',
    'concurrent:buildStep2',
    'concurrent:buildStep3',
    'concurrent:buildStep4',
    'concurrent:buildStep5',
    'cachebuster:global'
  ])
  grunt.registerTask('default', [
    'refresh'
  ])

  // Distribution Build
  grunt.registerTask('dist', [
    'node_version',
    'concurrent:distStep1',
    'concurrent:distStep2',
    'concurrent:distStep3',
    'concurrent:distStep4',
    'concurrent:distStep5',
    'cachebuster:global'
  ])
  
  // Force (Non-Concurrent)
  grunt.registerTask('force-build', [
    'node_version',
    'clean:modulesPreLess',
    'less:modules',
    'less:print',
    'clean:modulesPreTranspile',
    'postcss:modules',
    'concat:modules',
    'concat:print',
    'postcss:build',
    'svgmin:resources',
    'svgmin:icons',
    'svgstore:icons',
    'browserify:global',
    'modernizr:global',
    'uglify:build',
    'cachebuster:global'
  ])
  grunt.registerTask('force-dist', [
    'node_version',
    'clean:modulesPreLess',
    'less:modules',
    'less:print',
    'clean:modulesPreTranspile',
    'postcss:modules',
    'concat:modules',
    'concat:print',
    'postcss:dist',
    'svgmin:resources',
    'svgmin:icons',
    'svgstore:icons',
    'browserify:global',
    'modernizr:global',
    'uglify:dist',
    'cachebuster:global'
  ])

  // CSS
  grunt.registerTask('css', [
    'node_version',
    '_css-modules',
    'less:print',
    'concat:print',
    'postcss:build',
    '_js',
    'cachebuster:global'
  ])

  grunt.registerTask('_css-modules', [
    'clean:modulesPreLess',
    'less:modules',
    'clean:modulesPreTranspile',
    'postcss:modules',
    'concat:modules'
  ])
  grunt.registerTask('_css-dist', [
    '_css-modules',
    'less:print',
    'concat:print',
    'postcss:dist'
  ])

  // Icons
  grunt.registerTask('_icons', [
    // '_brand-icons',
    'svgmin:icons',
    'svgstore:icons'
  ])
  grunt.registerTask('_icons-dist', [
    '_icons'
  ])
  grunt.registerTask('icons', [
    'node_version',
    '_icons',
    'cachebuster:global'
  ])
  grunt.registerTask('icons-build', [
    'node_version',
    '_icons',
    'cachebuster:global'
  ])
  grunt.registerTask('icons-dist', [
    'node_version',
    '_icons',
    'cachebuster:global'
  ])

  // LESS
  grunt.registerTask('less-build', [
    'node_version',
    '_css-modules',
    'less:print',
    'concat:print',
    'postcss:build',
    'cachebuster:global'
  ])
  grunt.registerTask('less-dist', [
    'node_version',
    '_css-modules',
    'less:print',
    'concat:print',
    'postcss:dist',
    'cachebuster:global'
  ])

  // JavaScript
  grunt.registerTask('_js-dist', [
    'browserify:global',
    'modernizr:global',
    'uglify:dist'
  ])
  grunt.registerTask('_js', [
    'concurrent:buildJSStep1',
    'concurrent:buildJSStep2'
  ])
  grunt.registerTask('js', [
    'node_version',
    'concurrent:buildJSStep1',
    'concurrent:buildJSStep2',
    'cachebuster:global'
  ])
  grunt.registerTask('js-build', [
    'node_version',
    'concurrent:buildJSStep1',
    'concurrent:buildJSStep2',
    'cachebuster:global'
  ])
  grunt.registerTask('js-dist', [
    'node_version',
    'concurrent:distJSStep1',
    'concurrent:distJSStep2',
    'cachebuster:global'
  ])

  grunt.registerTask('_brand-icons', [
    'curl:brandIcons',
    'unzip:brandIcons',
    'clean:brandIcons'
  ])
  grunt.registerTask('_brand', [
    '_brand-icons'
    // 'curl:brandStyles'
  ])
}
