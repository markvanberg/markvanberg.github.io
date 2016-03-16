var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('concatScripts', function(){
  //array of filenames or string.
  // If the load order matters make sure it's in the right order
  gulp.src(['assets/js/jquery-2.1.0.min.js', 'assets/modernizr-2.8.0.min.js', 'assets/js/plugins.js', 'assets/js/jquery.ajaxchimp.min.js', 'assets/js/functions.js']) //Takes readable stream of data and concats it
  .pipe(concat("app.js")) // Takes a readable stream of data and writes it to disk
  .pipe(gulp.dest('assets/js'));
});

gulp.task('minifyScripts', function(){
  gulp.src('assets/js/app.js')
  .pipe(uglify())
  // This overwrites the original file though. Take care. You should rename the file as you minify it
  // you can use gulp-rename for renaming the files
  //.pipe(rename['app.min.js'])
  .pipe(gulp.dest('assets/js'));
});

