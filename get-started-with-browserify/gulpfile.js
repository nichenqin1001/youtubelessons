var gulp = require('gulp');
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var watchify = require("watchify");
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');

var watchedBrowserify = watchify(browserify({
  entries: 'app.js',
  debug: true
}));

function bundle() {
  return watchedBrowserify
    .bundle()
    .pipe(source('bundle.js'))//vinyl-source-stream用于将Browserify的bundle()的输出转换为Gulp可用的vinyl（一种虚拟文件格式）流
    .pipe(buffer())//vinyl-buffer用于将vinyl流转化为buffered vinyl文件（gulp-sourcemaps及大部分Gulp插件都需要这种格式）
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
}

gulp.task('html', function () {
  gulp.src('index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['html'], bundle);
watchedBrowserify.on('update', bundle);