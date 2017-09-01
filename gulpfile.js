'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    gls = require('gulp-live-server'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    pump = require('pump');

gulp.task('default', ['sass', 'watch' , 'compress' , 'scripts', 'css' , 'serve']);

gulp.task('sass', function() {
    return gulp.src('public/min/style.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('public/css'));
});

gulp.task('css', function() {
  return gulp.src('src/scss/*scss')
    .pipe(concat('style.scss'))
    .pipe(gulp.dest('public/min/'));
});

gulp.task('scripts', function() {
    return gulp.src('src/js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('public/min/'));
});

gulp.task('compress', function (cb) {
  pump([
        gulp.src('public/js/all.js'),
        uglify(),
        gulp.dest('public/js')
    ],
    cb
  );
});

gulp.task('watch', function(){
    /** Watch any changes */
    gulp.watch( "./src/scss/*.scss", ['sass', 'css']);
    gulp.watch( "./src/js/*.js", ['compress', 'scripts']);
    gulp.watch( "./*.html");
});

gulp.task('serve', function() {
    var server = gls.static('./', 8000);
    server.start();
    gulp.watch('src/scss/*.scss', function(file) {
        server.notify.apply(server, [file]);
    });
    gulp.watch('src/js/js/*.js', function(file) {
        server.notify.apply(server, [file]);
    });
    gulp.watch('./*html', function(file) {
        server.notify.apply(server, [file]);
    });
});
