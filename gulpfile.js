var gulp = require('gulp');
var babel = require('gulp-babel');
var rename = require('gulp-rename');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var stylish = require('gulp-jscs-stylish');
var uglify = require('gulp-uglify');
var stylus = require('gulp-stylus');
var minify = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var noop = function () {};
var connect = require('gulp-connect');

gulp.task('connect', function () {
    return connect.server({
        livereload: true,
        port: 1337
    });
});

gulp.task('html', function () {
    return gulp.src('./examples/*')
        .pipe(connect.reload());
});

gulp.task('babel', function () {
    return gulp.src('./src/index.js')
        .pipe(jshint({
            esnext: true,
            curly: true,
            eqeqeq: true,
            forin: true,
            freeze: true,
            maxparams: 3
        }))

        .pipe(jscs())
        .on('error', noop)
        .pipe(stylish())
        .pipe(rename('checkbox-radio-styler.js'))
        .pipe(gulp.dest('./dist'))
        .pipe(babel())
        .pipe(rename('checkbox-radio-styler.es5.js'))
        .pipe(gulp.dest('./dist'))
        .pipe(uglify())
        .pipe(rename('checkbox-radio-styler.es5.min.js'))
        .pipe(gulp.dest('./dist'))
        .pipe(connect.reload());
});

gulp.task('stylus', function () {
    return gulp.src('./src/index.styl')
        .pipe(stylus())
        .pipe(autoprefixer())
        .pipe(rename('checkbox-radio-styler.css'))
        .pipe(gulp.dest('./dist'))
        .pipe(minify())
        .pipe(rename('checkbox-radio-styler.min.css'))
        .pipe(gulp.dest('./dist'))
        .pipe(connect.reload({stream: true}));
});

gulp.task('watch', function () {
    gulp.watch('./examples/*', ['html']);
    gulp.watch('./src/index.styl', ['stylus']);
    return gulp.watch('./src/index.js', ['babel']);
});

gulp.task('default', ['connect', 'stylus', 'html', 'babel', 'watch']);
