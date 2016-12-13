const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('default', () =>
    gulp.src('_img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('_optiz'))
);
