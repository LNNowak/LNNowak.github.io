var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var changedInPlace = require('gulp-changed-in-place');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
//var watch = require('gulp-watch');

var paths = {
    dist: [
	"./partials/**/*.html",
	"./dist/css/**/*.min.css",
	"./dist/css/*.min.css",
	"./dist/js/**/*.min.js",
	"./dist/js/*.min.js",
	"./index.html"
    ],
    sass: [
	'./scss/*.scss'
    ],
    JavaScript: [
	'./JavaScript/*.js',
	'./JavaScript/**/*.js'
    ],
    TypeScript: ['/TypeScript/**/*.ts']
};


gulp.task('TypeScript', function () {
    gulp
	    .src(paths.TypeScript)
	    .pipe(changedInPlace())
	    .pipe(gulp.dest('./TypeScript'))
	    .pipe(ts({
		noImplicitAny: false,
		outDir: './JavaScript'
	    }))
	    .pipe(gulp.dest('./JavaScript'))
	    ;
});

gulp.task('JavaScript', function () {
    gulp.src(paths.JavaScript)
	    .pipe(changedInPlace())
	    .pipe(sourcemaps.init({loadMaps: true}))
	    .pipe(uglify())
	    .pipe(rename({extname: '.min.js'}))
	    .pipe(sourcemaps.write('./', {addComment: true}))
	    .pipe(gulp.dest('./dist/js'))
	    ;
});

gulp.task('css', function () {
    gulp.src(paths.sass)
	    .pipe(changedInPlace())
	    .pipe(sass())
	    .on('error', sass.logError)
	    .pipe(gulp.dest('./CSS/'))
	    .pipe(minifyCss({}))
	    .pipe(rename({extname: '.min.css'}))
	    .pipe(sourcemaps.write('./', {addComment: true}))
	    .pipe(gulp.dest('./dist/css'))
	    ;
});

gulp.task('TypeScriptFull', function () {
    gulp
	    .src(paths.TypeScript)
	    .pipe(gulp.dest('./TypeScript'))
	    .pipe(ts({
		noImplicitAny: false,
		outDir: './JavaScript'
	    }))
	    .pipe(gulp.dest('./JavaScript'))
	    ;
});


gulp.task('JavaScriptFull', function () {
    gulp.src(paths.JavaScript)
	    .pipe(sourcemaps.init({loadMaps: true}))
	    .pipe(uglify())
	    .pipe(rename({extname: '.min.js'}))
	    .pipe(sourcemaps.write('./', {addComment: true}))
	    .pipe(gulp.dest('./dist/js'))
	    ;
});

gulp.task('cssFull', function () {
    gulp.src(paths.sass)
	    .pipe(sass())
	    .on('error', sass.logError)
	    .pipe(gulp.dest('./CSS/'))
	    .pipe(minifyCss({}))
	    .pipe(rename({extname: '.min.css'}))
	    .pipe(sourcemaps.write('./', {addComment: true}))
	    .pipe(gulp.dest('./dist/css'))
	    ;
});





gulp.task('watchCSS', function () {
    gulp.watch(paths.sass, ['css']);
});
gulp.task('watchJS', function () {
    gulp.watch(paths.JavaScript, ['JavaScript']);
});
gulp.task('watchTS', function () {
    gulp.watch([paths.TypeScript], ['TypeScript']);
});

// Static server
gulp.task('browser-sync', function () {
    browserSync.init({
	host: "localhost",
	server: {
	    baseDir: "./",
	},
	ui: false,
	online: false
    });

    gulp.watch(paths.dist).on('change', browserSync.reload);
});


gulp.task('default', ['watchCSS', 'watchJS', 'watchTS', 'browser-sync']);
gulp.task('build', ['cssFull', 'TypeScriptFull', 'JavaScriptFull']);
