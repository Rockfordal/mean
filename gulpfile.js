'use strict';
var gulp = require('gulp');
var pkg = require('./package.json');
var plug = require('gulp-load-plugins')();
//var env = plug.util.env;
var log = plug.util.log;

gulp.task('help', plug.taskListing);

gulp.task('ngAnnotateTest', function () {
});

gulp.task('hint', function () {
  return gulp
    .src(pkg.paths.js)
    .pipe(plug.jshint('./.jshintrc'))
    .pipe(plug.jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function () {
  return gulp
    .watch(pkg.paths.js, ['hint'])
//    .watch('./public/app/main.js', ['hint'])
    .on('change', function (event) {
      console.log('*** File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

/**
 * @desc Watch files and run jshint
 */
gulp.task('spy', function () {
  log('Watching JavaScript files');

  var js = ['gulpfile.js'].concat(pkg.paths.js);

  gulp
    .watch(js, ['jshint'])
    .on('change', logWatch);

  function logWatch(event) {
    log('*** File ' + event.path + ' was ' + event.type + ', running tasks...');
  }
});

/**
 * @desc Minify and bundle the app's JavaScript
 */
gulp.task('js', [], function() {
  log('Bundling, minifying, and copying the app\'s JavaScript');

//  var source = [].concat(pkg.paths.js, pkg.paths.stage);
//  var source = [pkg.paths.client + 'vendor/'];
  var source = [
      pkg.paths.vendor + 'bootstrap/dist/js/bootstrap.min.js',
      //pkg.paths.vendor + '',
  ];

  return gulp
    .src(source)
    // .pipe(plug.sourcemaps.init()) // get screwed up in the file rev process
    .pipe(plug.concat('all.min.js'))
//    .pipe(plug.ngAnnotate({add: true, single_quotes: true}))
//    .pipe(plug.bytediff.start())
//    .pipe(plug.uglify({mangle: true}))
//    .pipe(plug.bytediff.stop(common.bytediffFormatter))
    // .pipe(plug.sourcemaps.write('./'))
//    .pipe(gulp.dest(pkg.paths.client))
    .pipe(gulp.dest(pkg.paths.stage));
});

/**
 * serve the dev environment
 */
gulp.task('serve-dev', function () {
  serve({env: 'development'});
  startLivereload('development');
});

function startLivereload(env) {
  var paths = [pkg.paths.js, pkg.paths.html];
  var options = { auto: true };
  plug.livereload.listen(options);
  gulp
    .watch(paths)
    .on('change', function (file) {
      plug.livereload.changed(file.path);
    });
  log('Serving from ' + env);
}

function serve(args) {
  console.log(args.env);
  var options = {
    script: 'server.js',
    delayTime: 1,
    ext: 'html js',
    env: {'NODE_ENV': args.env},
    watch: [
      'gulpfile.js',
      'package.json',
      pkg.paths.server
    ]
  };

  return plug.nodemon(options)
    //.on('change', tasks)
    .on('restart', function () {
      log('restarted!');
    });
}