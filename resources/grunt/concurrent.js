module.exports = {
  buildStep1: [
    'clean:modulesPreLess',
    'clean:modulesPreTranspile',
    'svgmin:resources'
  ],
  buildStep2: [
    'less:modules',
    'less:print'
  ],
  buildStep3: [
    'postcss:modules',
    'svgmin:icons'
  ],
  buildStep4: [
    'browserify:global',
    'modernizr:global',
    'svgstore:icons',
    'concat:modules',
    'concat:print'
  ],
  buildStep5: [
    'postcss:build',
    'uglify:build'
  ],

  distStep1: [
    'clean:modulesPreLess',
    'clean:modulesPreTranspile',
    'svgmin:resources'
  ],
  distStep2: [
    'less:modules',
    'less:print'
  ],
  distStep3: [
    'postcss:modules',
    'svgmin:icons'
  ],
  distStep4: [
    'browserify:global',
    'modernizr:global',
    'svgstore:icons',
    'concat:modules',
    'concat:print'
  ],
  distStep5: [
    'postcss:dist',
    'uglify:dist'
  ],
  buildJSStep1: [
    'browserify:global',
    'modernizr:global'
  ],
  buildJSStep2: [
    'uglify:build'
  ],
  distJSStep1: [
    'browserify:global',
    'modernizr:global'
  ],
  distJSStep2: [
    'uglify:dist'
  ]
}
