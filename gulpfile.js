var gulp = require( 'gulp' );
var rename = require( 'gulp-rename' );
var sass = require( 'gulp-sass' );
var minifyCSS = require('gulp-clean-css');
var changed = require('gulp-changed');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

var styleSRC = './src/scss/style.scss';
var styleDIST = './dist/css/';


gulp.task('style', function(){
  return gulp.src( styleSRC )
      .pipe( sourcemaps.init() )
      .pipe( sass({
        errorLogToConsole: true,
      }) )
      .on( 'error', console.error.bind( console ) )
      .pipe( autoprefixer()  )
      .pipe(minifyCSS())
      .pipe( rename( { suffix: '.min' } ) )
      .pipe( sourcemaps.write('./') )
      .pipe(changed(styleDIST))
      .pipe( gulp.dest( styleDIST ) );
});
