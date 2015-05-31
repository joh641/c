var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    base64 = require('gulp-base64'),
    webpack = require('webpack'),
    webpackConfig = require('./webpack.config.js');

gulp.task('jshint', function() {
  var reporter = jshint.reporter;

  return gulp.src(['app/scripts/**/*.js'])
    .pipe(jshint())
    .pipe(reporter('jshint-stylish'))
    .pipe(reporter('fail'));
});

gulp.task('lint', ['jshint']);

gulp.task('sass', function() {
  return gulp.src('app/styles/index.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['> 1%'],
      cascade: false
    }))
    .pipe(base64({
      baseDir: 'app',
      extensions: ['gif', 'svg']
    }))
    .pipe(gulp.dest('..'));
});

gulp.task('build', ['sass'], function(done) {
  webpack(webpackConfig, function(err, stats) {
    if (err) throw new gutil.PluginError('webpack', err);

    gutil.log('[build]', stats.toString());
    done();
  });
});

gulp.task('watch', ['build'], function() {
  gulp.watch(['app/scripts/**/*.js'], ['lint']);
  gulp.watch(['app/styles/**/*.scss'], ['sass']);
});

gulp.task('default', ['build']);
