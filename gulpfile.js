var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('build', function() {
  console.log('building!!');
  gulp.src(['public/js/*.js'])
  .pipe(sourcemaps.init())
  .pipe(concat('concat.js'))
  .pipe(uglify())
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('public/dist'));
});

gulp.task('default', ['build']);
