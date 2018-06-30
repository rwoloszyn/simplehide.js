var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    webserver = require('gulp-webserver');

gulp.task('compress', function () {
    gulp.src('simplehide.js')
        .pipe(uglify({
            mangle: true,
            compress: true,
            preserveComments: 'some'
        }))
        .pipe(rename('simplehide.min.js'))
        .pipe(gulp.dest('./'));
});

gulp.task('webserver', function () {
    gulp.src(['.'])
        .pipe(webserver({
            fallback:   'index.html',
            directoryListing: true,
            open: true,
            livereload: {
                enable: true, // need this set to true to enable livereload
                filter: function (fileName) {
                    // exclude all source maps from livereload
                    if (fileName.match(/.map$/)) {
                        return false;
                    } else {
                        return true;
                    }
                }
            }
        }));
});