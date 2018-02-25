let gulp = require('gulp')
let sass = require('gulp-sass')
let postcss = require('gulp-postcss')
let sourcemaps = require('gulp-sourcemaps')
let autoprefixer = require('autoprefixer')
let server = require('gulp-webserver')

let srcSassFiles = ['./src/layout.scss']
let docsSassFiles = ['./docs/styles/examples.scss']

function compileSass (files) {
	return gulp.src(files)
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(postcss([autoprefixer]))
		.pipe(sourcemaps.write('.'))
}

function compileSrcSass () {
	return compileSass(srcSassFiles)
}

function buildSrcSass () {
	return compileSrcSass().pipe(gulp.dest('./dist'))
}

function compileDocsSass () {
	return compileSass(docsSassFiles)
}

function buildDocsSass () {
	return compileDocsSass().pipe(gulp.dest('./docs/styles/'))
}

gulp.task('compile-src-sass', function () {
	return compileSrcSass()
})

gulp.task('build-src-sass', function () {
	return buildSrcSass()
})

gulp.task('compile-docs-sass', function () {
	return compileDocsSass()
})

gulp.task('build-docs-sass', function () {
	return buildDocsSass()
})

// serve the docs
gulp.task('serve', ['build-docs-sass'], function () {
	gulp.watch(['./docs/**/*.scss', './src/**/*.scss'], ['build-docs-sass'])
	gulp.src(['./docs', './src'])
		.pipe(server({
			livereload: true,
			port: 8080
		}))
})
