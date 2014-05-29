var gulp = require('gulp');

var typescript = require('gulp-tsc');
var changed = require('gulp-changed');

var tsPaths = {
	inputs: ['./app/**/*.ts'],
	dest: './app'
}

var projPaths = {
	buildFolder: './build/app/',
	buildFiles: './build/app/**/*.*',
	packFolder: 'c:/temp/pack/',
	vendorFiles: ['./vendor/**/*.*'],
	htmlFiles: ['./app/**/*.html'],
	scriptFiles: ['./app/**/*.js']
}


var devFiles = {
	src: projPaths.vendorFiles.concat(projPaths.htmlFiles).concat(projPaths.scriptFiles)
}

gulp.task('typescript', function () {
	return gulp.src(tsPaths.inputs)
	.pipe(typescript())
	.pipe(gulp.dest(tsPaths.dest))
	.pipe(gulp.dest(projPaths.buildFolder))
	});


// The "return gulp" here is KEY if you want tasks that depend on it to know when this task is done!!!
gulp.task('build', function(cb) {
   return gulp.src(devFiles.src, {base: './'})
    .pipe(gulp.dest(projPaths.buildFolder))
});

gulp.task('pack', ['build'], function() {
	return gulp.src(projPaths.buildFiles, {base: './build/app/'})
	.pipe(gulp.dest(projPaths.packFolder))
});


gulp.task('watch', function() {
	return gulp.watch(tsPaths.inputs, ['typescript'])
})

gulp.task('default', ['typescript','build','watch']);