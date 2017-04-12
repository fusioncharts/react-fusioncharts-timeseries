let gulp = require('gulp'),
  initGulpTasks = require('react-component-gulp-tasks'),

  /**
   * Tasks are added by the react-component-gulp-tasks package
   *
   * See https://github.com/JedWatson/react-component-gulp-tasks
   * for documentation.
   *
   * You can also add your own additional gulp tasks if you like.
   */

  taskConfig = {
    component: {
      name: 'FusionTime',
      dependencies: [
        'classnames',
        'react',
        'react-dom',
        'fusioncharts',
      ],
      lib: 'lib',
    },

    example: {
      src: 'example/src',
      dist: 'example/dist',
      files: [
        'index.html',
        'url-sample.html',
        './images/*.png',
        './data/*',
        './views/*.html',
        // '../fonts/*',
        './css/*.css',
        '.gitignore',
      ],
      scripts: [
        'script.js',
      ],
      less: [
        './css/style.less',
      ],
    },
  };

initGulpTasks(gulp, taskConfig);
