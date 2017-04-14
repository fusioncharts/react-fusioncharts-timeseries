const gulp = require('gulp');
const initGulpTasks = require('react-component-gulp-tasks');
const uglify = require('gulp-uglify');
const pump = require('pump');

const taskConfig = {
  component: {
    name: 'FusionTime',
    dependencies: [
      'classnames',
      'react',
      'react-dom',
      'fusioncharts',
    ],
    lib: 'dist',
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

gulp.task('compress', () => {
  pump([
    gulp.src('lib/*.js'),
    uglify(),
    gulp.dest('lib'),
  ]);
});
