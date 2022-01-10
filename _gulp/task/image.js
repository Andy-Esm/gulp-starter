import imagemin, {gifsicle, mozjpeg, optipng, svgo} from 'gulp-imagemin';

export const image = () => {
	return app.gulp.src(app.path.src.img)
	.pipe(imagemin([
		gifsicle({interlaced: true}),
		mozjpeg({quality: 75, progressive: true}),
		optipng({optimizationLevel: 5}),
		svgo({
			plugins: [
				{
					name: 'removeViewBox',
					active: true
				},
				{
					name: 'cleanupIDs',
					active: false
				}
			]
		})
	]))
	.pipe(app.gulp.dest(app.path.build.img))
}