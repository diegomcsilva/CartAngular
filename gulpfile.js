
var gulp = require('gulp');
// var sass = require('gulp-sass');
// var watch = require('gulp-watch');
var gls = require('gulp-live-server');
// var concat = require('gulp-concat');

gulp.task('default', ['sass', 'watch', 'serve']);

gulp.task('sass', function() {
});

gulp.task('watch', function() {
});

gulp.task('serve', function() {
    var server = gls.static('./', 8000);
    server.start();
});
