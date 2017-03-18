const gulp = require('gulp');
const sass = require('gulp-sass');
const cleaCSS = require('gulp-clean-css');

gulp.task('buildCSS', function() {
	//the main file from which all imports are made is the scss file
	return gulp.src('./client/scss/index.scss')
	.pipe(sass().on('error', sass.logError)) //compile the sass file to css file
	.pipe(cleaCSS())
	.pipe(gulp.dest('./client/css/')) //write the css file to ./server

});

gulp.task('watch', function() {
	gulp.watch('./client/scss/*', ['buildCSS']);
});

gulp.task('default', ['buildCSS', 'watch']);