'use strict';
const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass');
const bourbon = require('node-bourbon').includePaths;
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const nodepath = 'node_modules/';
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const sassLint = require('gulp-sass-lint');
const jshint = require('gulp-jshint');



// ------------ SETUP TASKS -------------
// Copy Bulma filed into Bulma development folder
function setupBulma() {
    console.log('---------------COPYING BULMA FILES---------------');
    return src([nodepath + 'bulma/*.sass', nodepath + 'bulma/**/*.sass'])
      .pipe(dest('src/assets/sass/'));
  }
  

// ------------ DEVELOPMENT TASKS -------------

// COMPILE BULMA SASS INTO CSS
function compileSASS() {
    console.log('---------------COMPILING BULMA SASS---------------');
    return src(['src/assets/sass/bulma.sass'])
      .pipe(sass({
        outputStyle: 'compressed',
        sourceComments: 'map',
        sourceMap: 'sass',
        includePaths: bourbon
      }).on('error', sass.logError))
      .pipe(autoprefixer('last 2 versions'))
      .pipe(dest('src/assets/css'))
  }
  
  // COMPILE SCSS INTO CSS
  function compileSCSS() {
    console.log('---------------COMPILING SCSS---------------');
    return src(['src/assets/scss/core.scss'])
      .pipe(sass({
        outputStyle: 'compressed',
        sourceComments: 'map',
        sourceMap: 'scss',
        includePaths: bourbon
      }).on('error', sass.logError))
      .pipe(autoprefixer('last 2 versions'))
      .pipe(dest('src/assets/css'))
  }


// COPY CUSTOM JS
  function compileJS() {
    console.log('---------------COMPILE CUSTOM JS---------------');
    return src([
      'src/assets/js/global.js',
      'src/assets/js/main.js',
      'src/assets/js/chat.js',
      'src/assets/js/events.js',
      'src/assets/js/explorer.js',
      'src/assets/js/feed.js',
      'src/assets/js/stories.js',
      'src/assets/js/friends.js',
      'src/assets/js/go-live.js',
      'src/assets/js/inbox.js',
      'src/assets/js/landing.js',
      'src/assets/js/lightbox.js',
      'src/assets/js/modal-uploader.js',
      'src/assets/js/news.js',
      'src/assets/js/popovers-pages.js',
      'src/assets/js/popovers-users.js',
      'src/assets/js/profile.js',
      'src/assets/js/questions.js',
      'src/assets/js/shop.js',
      'src/assets/js/signup.js',
      'src/assets/js/settings.js',
      'src/assets/js/touch.js',
      'src/assets/js/tour.js',
      'src/assets/js/videos.js',
      'src/assets/js/widgets.js',
      'src/assets/js/autocompletes.js',
      'src/assets/js/elements.js',
    ])
      .pipe(babel())
      .pipe(dest('src/assets/js/'))
  }





// SASS LINT
function scssLint() {
    console.log('---------------SASS LINTING---------------');
    return src('src/assets/scss/**/*.scss')
      .pipe(sassLint({
        configFile: '.scss-lint.yml'
      }))
      .pipe(sassLint.format())
      .pipe(sassLint.failOnError());
  }

  
// JS LINTER
function jsLint() {
    return src('src/assets/js/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
  }


// ------------ OPTIMIZATION TASKS -------------

  
  // CONCATENATE JS PLUGINS
function concatPlugins() {
    console.log('---------------CONCATENATE JS PLUGINS---------------');
    return src([
      nodepath + 'jquery/dist/jquery.min.js',
      nodepath + 'feather-icons/dist/feather.min.js',
      nodepath + 'vivid-icons/dist/vivid-icons.min.js',
      nodepath + 'slick-carousel/slick/slick.min.js',
      nodepath + 'emojionearea/dist/emojionearea.min.js',
      nodepath + 'webui-popover/dist/jquery.webui-popover.min.js',
      nodepath + 'easy-autocomplete/dist/jquery.easy-autocomplete.min.js',
      nodepath + 'dropzone/dist/min/dropzone.min.js',
      nodepath + '@fengyuanchen/datepicker/dist/datepicker.min.js',
      nodepath + 'izitoast/dist/js/iziToast.min.js',
      nodepath + 'quill/dist/quill.min.js',
      nodepath + 'croppie/croppie.min.js',
      nodepath + 'cropperjs/dist/cropper.min.js',
      nodepath + 'dropzone/dist/min/dropzone.min.js',
      nodepath + 'modal-video/js/jquery-modal-video.min.js',
      nodepath + 'plyr/dist/plyr.min.js',
      nodepath + 'hammerjs/hammer.min.js',
      nodepath + 'scrollreveal/dist/scrollreveal.min.js',
      nodepath + 'hopscotch/dist/js/hopscotch.min.js',
      nodepath + 'glider-js/glider.min.js',
      //Additional static js assets
      'src/assets/vendor/js/**/*.js',
    ])
      .pipe(sourcemaps.init())
      .pipe(concat('app.js'))
      .pipe(sourcemaps.write('./'))
      .pipe(dest('src/assets/js'))
  }

// CONCATENATE CSS PLUGINS
function concatCssPlugins() {
    console.log('---------------CONCATENATE CSS PLUGINS---------------');
    return src([
        //nodepath + 'slick-carousel/slick/slick.css',
        //nodepath + 'slick-carousel/slick/slick-theme.css',
        nodepath + 'emojionearea/dist/emojionearea.min.css',
        nodepath + 'webui-popover/dist/jquery.webui-popover.min.css',
        nodepath + 'easy-autocomplete/dist/easy-autocomplete.min.css',
        nodepath + 'izitoast/dist/css/iziToast.min.css',
        nodepath + 'quill/dist/quill.core.css',
        nodepath + 'quill/dist/quill.bubble.css',
        nodepath + 'croppie/croppie.css',
        nodepath + 'plyr/dist/plyr.css',
        nodepath + 'dropzone/dist/min/dropzone.min.css',
        nodepath + 'cropperjs/dist/cropper.min.css',
        nodepath + 'hopscotch/dist/css/hopscotch.min.css',
        nodepath + 'glider-js/glider.min.css',
        //Additional static css assets
        'src/assets/vendor/css/**/*.css',
      ])
      .pipe(sourcemaps.init())
      .pipe(concat('app.css'))
      .pipe(sourcemaps.write('./'))
      .pipe(dest('src/assets/css'))
  }


//   function HTMLAccessibility() {
//     return src('dist/*.html')
//       .pipe(accessibility({
//         force: true
//       }))
//       .on('error', console.log)
//       .pipe(accessibility.report({
//         reportType: 'txt'
//       }))
//       .pipe(rename({
//         extname: '.txt'
//       }))
//       .pipe(dest('accessibility-reports'));
//   }

// WATCH FILES
function watchFiles() {
    watch(['src/assets/scss/**/*', 'src/assets/scss/*'], compileSCSS);
    watch('src/assets/js/*.js', compileJS);
  }

// RUN ACCESSIILITY CHECK
// exports.accessibility = HTMLAccessibility;
  
// RUN ALL LINTERS
exports.linters = series(scssLint, jsLint);

//SETUP
exports.setup = series(setupBulma);

  // DEV
exports.dev = series(concatPlugins, concatCssPlugins, compileJS,compileSASS, compileSCSS, watchFiles);
