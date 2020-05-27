const gulp = require('gulp');
// const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
let uglify = require('gulp-uglify-es').default;
const cleanCSS = require('gulp-clean-css');

// SCSS compile (Gulp 4 syntax)
// sass.compiler = require('node-sass');
// function style() {
//     return gulp.src('./src/css/**/*.scss')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(gulp.dest('./build/css'))
// }

// copy HTML
function html() {
    return gulp.src("src/*.html")
        .pipe(gulp.dest('build'));
}

// some experiments with css/sass
gulp.task('minify-css', () => {
    return gulp.src('src/css/*.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('build/css'));
});

function images() {
    return gulp.src('src/media/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/media'))
}

gulp.task("uglify", function () {
    return gulp.src("src/js/*.js")
        .pipe(uglify(/* options */))
        .pipe(gulp.dest("build/js"));
});


// just trying to use autoprefixes with clean css
// gulp.task('autoprefixer', () => {
//     const autoprefixer = require('autoprefixer')
//     const sourcemaps = require('gulp-sourcemaps')
//     const postcss = require('gulp-postcss')

//     return gulp.src('./src/*.css')
//         .pipe(sourcemaps.init())
//         .pipe(postcss([autoprefixer('last 4 version')]))
//         .pipe(sourcemaps.write('.'))
//         .pipe(gulp.dest('build/css'))
// })

//line below makes function above run when called
// exports.style = style;
exports.html = html;
exports.images = images;