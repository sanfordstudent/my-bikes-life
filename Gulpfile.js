var gulp        = require('gulp'),
    nodemon     = require('gulp-nodemon'),
    jshint      = require('gulp-jshint'),
    browserify  = require('browserify'),
    reactify    = require('reactify'),
    watch       = require('gulp-watch'),
    source      = require('vinyl-source-stream'),
    path        = require('path');

gulp.task('develop', ['browserify', 'nodemon']);

gulp.task('lint', function () {
  gulp.src('./**/*.jsx')
    .pipe(jshint())
})

gulp.task('browserify', function() {
  var b = browserify();
  b.transform(reactify); // use the reactify transform
  b.add('./src/client/app.js');
  return b.bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./src/client/public/assets/javascript'));
});

gulp.task('nodemon', function() {
  nodemon({
    script: 'src/server/routes.js'
  , ext: 'js jsx html'
  , tasks: function (changedFiles) {
    var tasks = []
    changedFiles.forEach(function (file) {
      if (path.extname(file) === '.jsx' && !~tasks.indexOf('lint')) {
        tasks.push(['lint', 'browserify']);
      }
    })
    return tasks
  }
  , ignore: ['node_modules/**', 'Gulpfile.js']
  , env: { 'NODE_ENV': 'development' }
  })
});

module.exports = gulp;
