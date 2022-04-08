const { src, dest, watch, series } = require('gulp');
const browsersync = require('browser-sync').create();

function browsersyncServe(cb){
  browsersync.init({
    server: {
      baseDir: '.'
    }    
  });
  cb();
}

function browsersyncReload(cb){
  browsersync.reload();
  cb();
}

// Default Gulp Task
exports.default = series(
  browsersyncServe,
  watchTask
);

// Watch Task
function watchTask(){
  watch(['*.html', 'css/*.css', '/css/*.css', '..css/*.css'], browsersyncReload);
  watch(['app/**/*.css', 'app/**/*.js'], series(browsersyncReload));
}