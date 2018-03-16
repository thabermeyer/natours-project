var gulp = require('gulp');
var sass = require('gulp-sass');
// var autoprefixer = require('autoprefixer');

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/temp/styles'));
});