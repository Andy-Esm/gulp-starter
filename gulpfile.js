const {src, dest, watch, parallel, series} = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const babel = require('gulp-babel');
const del = require('del');
const browserSync = require('browser-sync').create();

//auto reload
function browserReload() {
	browserSync.init({
		server: {
			baseDir: 'app/',
		},
		notify: false,
	});
}

//css
function styles() {
	return src('app/scss/style.scss')
		.pipe(scss({outputStyle: 'compressed'}))
		.pipe(concat('style.min.css'))
		.pipe(
			autoprefixer({
				overrideBrowserslist: ['last 5 versions'],
				grid: true,
			})
		)
		.pipe(dest('app/css'))
		.pipe(browserSync.stream());
}

//js

function scripts() {
	return src(['app/js/main.js'])
		.pipe(concat('main.min.js'))
		.pipe(babel({presets: ['@babel/env']}))
		.pipe(uglify())
		.pipe(dest('app/js'))
		.pipe(browserSync.stream());
}

//images
function images() {
	return src('app/images/**/*.*')
		.pipe(
			imagemin([
				imagemin.gifsicle({interlaced: true}),
				imagemin.mozjpeg({
					quality: 75,
					progressive: true,
				}),
				imagemin.optipng({optimizationLevel: 5}),
				imagemin.svgo({
					plugins: [{removeViewBox: true}, {cleanupIDs: false}],
				}),
			])
		)
		.pipe(dest('dist/images'));
}

//build
function build() {
	return src(['app/**/*.html', 'app/css/style.min.css', 'app/js/main.min.js'], {
		base: 'app',
	}).pipe(dest('dist'));
}

//clean

function cleanDist() {
	return del('dist');
}

//watching files
function watching() {
	watch(['app/scss/**/*.scss'], styles);
	watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
	watch(['app/**/*.html']).on('change', browserSync.reload);
}

exports.cleanDist = cleanDist;
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.browserReload = browserReload;
exports.watching = watching;

exports.build = series(cleanDist, images, build);

exports.default = parallel(styles, scripts, browserReload, watching);
