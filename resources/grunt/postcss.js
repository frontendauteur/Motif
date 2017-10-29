var paths = require('../grunt-vars')
var files = {}

files[paths.distCss + paths.pkg.name + '.css'] = paths.buildCss + paths.pkg.name + '.css'

module.exports = {
  options: {
    map: {
      prev: paths.buildCss,
      inline: false,
      annotation: paths.buildCss + 'maps/'
    }
  },
  modules: {
    files: [{
      expand: true,
      cwd: paths.buildCssModulesPostLess,
      src: ['**/*.css'],
      dest: paths.buildCssModulesPreConcat
    }],
    options: {
      map: {
        sourcesContent: false,
        inline: true
      },
      processors: [
        function (css, out) {
          css.walkRules(function (rule) {
            rule.walkDecls(function (decl) {
              if (decl.prop === 'composes' && decl.value.indexOf('.less') > -1) {
                const cloned = decl.clone({
                  value: decl.value.replace('.less', '.css')
                })
                decl.replaceWith(cloned)
              }
            })
          })
        },
        require('postcss-modules-extract-imports')(),
        require('postcss-icss-composes')(),
        require('postcss-icss-selectors')(),
        require('postcss-modules-resolve-imports')(),
        function (css, out) {
          if (!out.opts.from.includes('/components/')) {
            return true
          }
          var path = require('path')
          var fs = require('fs')
          var buildCssModulesPostLess = path.resolve(path.join(paths.buildCssModulesPostLess, 'components'))
          var pathName = path.normalize(path.join(path.relative(buildCssModulesPostLess, path.dirname(out.opts.from)), path.basename(out.opts.from, '.css')))
          pathName = pathName.replace(/\\/g, '/')
          var jsonFileName = path.resolve(paths.distCss + 'modules.json')
          var file
          if (fs.existsSync(jsonFileName)) {
            file = require(jsonFileName)
          } else {
            if (!fs.existsSync(path.resolve(paths.distDir))) {
              fs.mkdirSync(path.resolve(paths.distDir))
            }
            if (!fs.existsSync(path.resolve(paths.distCss))) {
              fs.mkdirSync(path.resolve(paths.distCss))
            }
            file = {}
          }
          file[pathName] = out.root.exports
          fs.writeFileSync(jsonFileName, JSON.stringify(file))
        },
        function (css, out) {
          var path = require('path')
          var fs = require('fs')
          var buildCssModulesPostLess = path.resolve(paths.buildCssModulesPostLess)
          var pathName = path.normalize(path.join(path.relative(buildCssModulesPostLess, path.dirname(out.opts.from)), path.basename(out.opts.from, '.css')))
          pathName = pathName.replace(/\\/g, '/')
          var jsFileName = path.resolve(paths.distJs + 'styles.js')
          var file = ''
          if (fs.existsSync(jsFileName)) {
            file = fs.readFileSync(jsFileName, 'utf-8')
          } else {
            if (!fs.existsSync(path.resolve(paths.distDir))) {
              fs.mkdirSync(path.resolve(paths.distDir))
            }
            if (!fs.existsSync(path.resolve(paths.distJs))) {
              fs.mkdirSync(path.resolve(paths.distJs))
            }
            file = ''
          }
          var constName = pathName.replace(/\/|-/g, '_').toUpperCase().replace(/__/g, '_')
          file += 'export const ' + constName + ' = ' + JSON.stringify(out.root.exports, null, 2) + '\n'
          fs.writeFileSync(jsFileName, file)
        }
      ]
    }
  },
  build: {
    src: paths.distCss + '**/*.css',
    options: {
      processors: [
        require('cssnano')({
          rawCache: false,
          convertValues: false,
          calc: false,
          colormin: false,
          discardOverridden: false,
          mergeLonghand: false,
          mergeRules: false,
          minifyParams: false,
          normalizeString: false,
          minifyFontValues: false,
          minifyGradients: false,
          minifySelectors: false,
          normalizePositions: false,
          normalizeRepeatStyle: false,
          normalizeWhitespace: false,
          reduceTransforms: false,
          uniqueSelectors: false,
          zindex: false
        }),
        require('autoprefixer')({
          browsers: ['last 2 versions']
        })
      ]
    }
  },
  dist: {
    src: paths.distCss + '**/*.css',
    options: {
      processors: [
        require('postcss-pxtorem')(),
        require('autoprefixer')({
          browsers: [
            'last 3 versions',
            'ie >= 10',
            'iOS >= 8',
            'Firefox ESR',
            'Android >= 4'
          ]
        }),
        require('cssnano')({
          reduceTransforms: false,
          zindex: false
        })
      ]
    }
  }
}
