var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

	gulp.task('build', function(){

		return gulp.src([
			'node_modules/blueimp-md5/js/md5.js',
			'node_modules/bases/bases.js',
			'src/password-generator.js'
		])
		.pipe(concat('passgen.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist'))
		.pipe(gulp.dest('docs'));
	});

gulp.task('default', ['build'], function(){});
