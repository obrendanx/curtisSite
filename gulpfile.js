var gulp = require( 'gulp' );
var rename = require( 'gulp-rename' );
var sass = require( 'gulp-sass' );
var minifyCSS = require('gulp-clean-css');
var changed = require('gulp-changed');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');
var browserify = require('browserify');
var babelify = require('babelify');
var babelcore = require('babel-core');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');

var styleSRC = './src/scss/style.scss';
var styleDIST = './dist/css/';
var styleWatch = './src/scss/**/*.scss';

var jsSRC = 'script.js';
var jsFolder = 'src/js/';
var jsDIST = './dist/js/';
var jsWatch = './src/js/**/*.js';
var jsFILES = [jsSRC];


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

gulp.task('js',  async function(){
    return jsFILES.map(function( entry ){
    return browserify({
      entries: [jsFolder + entry]
    })
    .transform( babelify, {presets: ['env']} )
    .bundle()
    .pipe( source( entry ) )
    .pipe( rename({extname: '.min.js' }) )
    .pipe( buffer() )
    .pipe( sourcemaps.init({ loadMaps: true }) )
    .pipe( uglify() )
    .pipe( sourcemaps.write( './' ) )
    .pipe( gulp.dest( jsDIST ) )
  });
});

gulp.task('default', gulp.parallel('style', 'js') );

gulp.task('watch', function(){
  return gulp.watch( styleWatch, gulp.series('style'));
  return gulp.watch( jsWatch, gulp.series('js'));
});
