let gulp = require('gulp')
let sass = require('gulp-sass')
let postcss = require('gulp-postcss')
let sourcemaps = require('gulp-sourcemaps')
let autoprefixer = require('autoprefixer')
let server = require('gulp-webserver')

gulp.task('sass', function () {
	return gulp.src('./src/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(postcss([autoprefixer]))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./dist'))
})

gulp.task('build', ['sass'])
gulp.task('watch', function () {
	gulp.watch(['./src/**/*.scss'], ['sass'])
})

// serve the examples
gulp.task('serve', function () {
	gulp.src(['./examples', './dist'])
		.pipe(server({
			livereload: true,
			port: 8080
		}))
})
