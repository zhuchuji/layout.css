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

// build sass files under example
gulp.task('example-sass', function () {
	return gulp.src(['./examples/**/*.scss'])
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(postcss([autoprefixer]))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./examples'))
})

// serve the examples
gulp.task('serve', ['sass', 'example-sass'], function () {
	gulp.watch(['./examples/**/*.scss'], ['example-sass'])
	gulp.watch(['./src/**/*.scss'], ['sass'])
	gulp.src(['./examples', './src'])
		.pipe(server({
			livereload: true,
			port: 8080
		}))
})
