const gulp = require("gulp");

// sass
const sass = require("gulp-sass")(require("sass"));
const minifyCss = require("gulp-minify-css");
// rename files
const rename = require("gulp-rename");

// live reload
const livereload = require("gulp-livereload");
const connect = require("gulp-connect");

//  check js for errors
const jshint = require("gulp-jshint");

// minification of js
const uglify = require("gulp-uglify");

// server task - live server:
function serve(done) {
    connect.server({
        root: "",
        port: 1988,
        livereload: true
    });
    done();
}

// style task - sass
function styles(done) {
    gulp.src("css/style.scss")  // source file for sass
        .pipe(sass({ outputStyle: "compressed"}).on("error", sass.logError))
        .pipe(rename({suffix: ".min"})) // minify the sass file made by sass
        .pipe(minifyCss({ processImport: false}))
        .pipe(gulp.dest("css/")) // destination folder for the css file
        .pipe(connect.reload());
    done();
}

// html
function html(done) {
    gulp.src("./*.html")
        .pipe(connect.reload());
    done();
}

// js lint task
function lint(done) {
    gulp.src(["js/script.js", "!js/*.min.js"])
        .pipe(jshint())
        .pipe(jshint.reporter("default"))
        .pipe(connect.reload());
    done();
}

// js minification
function minifyJs(done) {
    gulp.src(["js/script.js", "!js/*.min.js"])
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('js/'))
        .pipe(connect.reload());
    done();
}

// watch task to watch out for file changes
function watch(done) {
    gulp.watch("css/*.scss", gulp.series(styles));
    gulp.watch("./*.html", gulp.series(html));
    gulp.watch(["js/script.js", "!js/*.min.js"], gulp.series(lint, minifyJs));
    done();
}

// run the task
gulp.task("default", gulp.series(serve, watch, lint, minifyJs, html, styles));