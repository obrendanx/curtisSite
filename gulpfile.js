var gulp = require( 'gulp' );
var rename = require( 'gulp-rename' );
var sass = require( 'gulp-sass' );
var minifyCSS = require('gulp-clean-css');
var changed = require('gulp-changed');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');

var styleSRC = './src/scss/style.scss';
var styleDIST = './dist/css/';
var styleWatch = './src/scss/**/*.scss';

var jsSRC = './src/js/script.js';
var jsDIST = './dist/js/';
var jsWatch = './src/js/**/*.js';


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

gulp.task('js', function(){
  return gulp.src( jsSRC )
    .pipe( gulp.dest( jsDIST ) );
});

gulp.task('default', gulp.parallel('style', 'js') );

gulp.task('watch', function(){
  return gulp.watch( styleWatch, gulp.series('style'));
  return gulp.watch( jsWatch, gulp.series('js'));
});
