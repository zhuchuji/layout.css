let gulp = require('gulp')
let sass = require('gulp-sass')
let postcss = require('gulp-postcss')
let sourcemaps = require('gulp-sourcemaps')
let autoprefixer = require('autoprefixer')
let server = require('gulp-webserver')

// build sass files under src
gulp.task('sass', function () {
	return gulp.src('./src/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(postcss([autoprefixer]))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./dist'))
})

gulp.task('build', ['sass'])

// build sass files under doc
gulp.task('doc-sass', function () {
	return gulp.src(['./docs/**/*.scss'])
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(postcss([autoprefixer]))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./docs'))
})

// serve the docs
gulp.task('serve', ['sass', 'doc-sass'], function () {
	gulp.watch(['./docs/**/*.scss'], ['doc-sass'])
	gulp.watch(['./src/**/*.scss'], ['sass'])
	gulp.src(['./docs', './src'])
		.pipe(server({
			livereload: true,
			port: 8080
		}))
})
