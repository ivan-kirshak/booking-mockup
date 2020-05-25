const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
let uglify = require('gulp-uglify-es').default;

// SCSS compile (Gulp 4 syntax)
sass.compiler = require('node-sass');
function style() {
    return gulp.src('./src/css/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./build/css'))
}

// copy HTML
function html () {
    return gulp.src("src/*.html")
        .pipe(gulp.dest('build'));
}

function images () {
    return gulp.src('src/media/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/media'))
}

gulp.task("uglify", function () {
    return gulp.src("src/js/*.js")
        .pipe(uglify(/* options */))
        .pipe(gulp.dest("build/js"));
});

//line below makes function above run when called
exports.style = style;
exports.html = html;
exports.images = images;