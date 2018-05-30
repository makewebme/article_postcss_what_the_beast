var gulp = require('gulp-v4');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

gulp.task('styles', function () {
  var plugins = [
    autoprefixer({ browsers: ['last 10 version'] }),
    precss
  ];

  return gulp.src('./src/style.css')
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./dist'));
});
