var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
const { src, dest } = require('gulp');
const { watch, series } = require('gulp');

function css() {
    return src('./assets/*.sass')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./assets/'));
}

exports.default = function () {
    watch('./assets/*.sass', css);
}