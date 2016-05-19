var gulp = require('gulp');
var del = require('del');
var exec = require('child_process').exec;
var artifactName = 'j4ts';
var artifactVersion = '0.1.0';
var jsweetOutputDir = 'packaging/jsweet-candy';
var jsweetWebjarsOutputDir = jsweetOutputDir+'/src/main/resources/META_INF/webjars';
var jsweetSrcOutputDir = jsweetOutputDir+'/src/main/resources/src';

gulp.task('clean', function(cb) {
	del([ 'target/js', jsweetWebjarsOutputDir, jsweetSrcOutputDir ], cb);
});

gulp.task('prepare-jsweet-candy', function(cb) {
	gulp.src(['target/js/**/*.js'])
	  .pipe(gulp.dest(jsweetWebjarsOutputDir+'/'+artifactName+'/'+artifactVersion));
	gulp.src(['target/js/**/*.d.ts'])
	  .pipe(gulp.dest(jsweetSrcOutputDir+'/typings'));
});
