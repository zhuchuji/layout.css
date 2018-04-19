let gulp = require('gulp')
let sass = require('gulp-sass')
let postcss = require('gulp-postcss')
let sourcemaps = require('gulp-sourcemaps')
let autoprefixer = require('autoprefixer')
let server = require('gulp-webserver')
let uglifyJs = require('gulp-uglify')
let pump = require('pump')
let htmlMinifier = require('gulp-html-minifier')
let clean = require('gulp-clean')

let srcSassFiles = ['./src/layout.scss']
let docsSassFiles = ['./docs-src/styles/examples.scss']

function compileSass (files, compileOptions) {
	compileOptions = compileOptions || {}
	return gulp.src(files)
		.pipe(sourcemaps.init())
		.pipe(sass(compileOptions).on('error', sass.logError))
		.pipe(postcss([autoprefixer]))
		.pipe(sourcemaps.write('.'))
}

gulp.task('build-src', function () {
	return compileSass(srcSassFiles, {outputStyle: 'compressed'}).pipe(gulp.dest('./dist'))
})

gulp.task('compile-serve-sass', function () {
	return compileSass(docsSassFiles).pipe(gulp.dest('./docs-src/styles/'))
})

gulp.task('clean-docs', function () {
	return gulp.src('./docs/', {read: false}).pipe(clean())
})

gulp.task('compile-docs-sass', ['clean-docs'], function () {
	return compileSass(docsSassFiles, {outputStyle: 'compressed'}).pipe(gulp.dest('./docs/styles'))
})

// serve the docs
gulp.task('serve', ['compile-serve-sass'], function () {
	gulp.watch(['./docs-src/**/*.scss', './src/**/*.scss'], ['compile-serve-sass'])
	gulp.src(['./docs-src', './src'])
		.pipe(server({
			host: process.env.HOST || '0.0.0.0',
			livereload: true,
			port: 8080
		}))
})

gulp.task('build-docs', ['compile-docs-sass'], function (cb) {
	// gulp.src(['./docs-src/**/*.js']).pipe(uglifyJs()).pipe(gulp.dest('./docs/'))
	pump([
		gulp.src(['./docs-src/**/**/*.js']),
		uglifyJs(),
		gulp.dest('./docs/')
	], cb)
	gulp.src(['./docs-src/*.html']).pipe(htmlMinifier({collapseWhitespace: true})).pipe(gulp.dest('./docs'))
})
