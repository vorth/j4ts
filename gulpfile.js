var gulp = require('gulp');
var typescript = require('gulp-tsc');
var del = require('del');
var exec = require('child_process').exec;
var artifactName = 'j4ts';
var artifactVersion = '0.0.1';
var jsweetOutputDir = 'packaging/jsweet-candy';
var jsweetWebjarsOutputDir = jsweetOutputDir+'/src/main/resources/META_INF/webjars';
var jsweetSrcOutputDir = jsweetOutputDir+'/src/main/resources/src';

gulp.task('bundle', function() {
	gulp.src([ 'src/**/*.ts' ]).pipe(typescript({
		target : 'ES5',
		declaration : true,
		module : 'system',
		out : 'j4ts.js'
	})).pipe(gulp.dest('js/'))
});

gulp.task('clean', function(cb) {
	del([ 'js', jsweetWebjarsOutputDir, jsweetSrcOutputDir ], cb);
});

gulp.task('prepare-jsweet-candy', ['bundle'], function(cb) {
	gulp.src(['js/**/*.js'])
	  .pipe(gulp.dest(jsweetWebjarsOutputDir+'/'+artifactName+'/'+artifactVersion));
	gulp.src(['js/**/*.d.ts'])
	  .pipe(gulp.dest(jsweetSrcOutputDir+'/typings'));
});
