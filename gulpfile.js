var gulp = require( 'gulp' );
var rename = require( 'gulp-rename' );
var sass = require( 'gulp-sass' );
var minifyCSS = require('gulp-clean-css');
var changed = require('gulp-changed');

var styleSRC = './src/scss/style.scss';
var styleDIST = './dist/css/';


gulp.task('style', function(){
  return gulp.src( styleSRC )
      .pipe( sass({
        errorLogToConsole: true,
      }) )
      .on( 'error', console.error.bind( console ) )
      .pipe(minifyCSS())
      .pipe( rename( { suffix: '.min' } ) )
      .pipe(changed(styleDIST))
      .pipe( gulp.dest( styleDIST ) );
});
