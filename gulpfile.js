'use strict'

var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
  prefix = require('gulp-autoprefixer'),
    maps = require('gulp-sourcemaps');

function swallowErr (err) {
    console.log( err.toString());
    this.emit('end');
}

gulp.task('compileSass', function() {
  return gulp.src("scss/style.scss")
      .pipe(plumber({
          errorHandler: swallowErr
      }))
      .pipe(maps.init())
      .pipe(sass())
      .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
      .pipe(maps.write('./'))
      .pipe(gulp.dest('css'));
});

gulp.task('watch', function () {
    gulp.watch('scss/*{.scss,.sass}', ['compileSass'])
});

gulp.task('default', ['watch']);
