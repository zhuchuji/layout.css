let gulp = require('gulp')
let sass = require('gulp-sass')
let postcss = require('gulp-postcss')
let sourcemaps = require('gulp-sourcemaps')
let autoprefixer = require('autoprefixer')

gulp.task('sass', function () {
	return gulp.src('./src/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(postcss([autoprefixer]))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./dist'))
})

gulp.task('build', ['sass'])
