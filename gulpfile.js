const {src, dest, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require ('gulp-sass');
/*const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');*/



function bs() {
 serveSass();
 browserSync.init({
     server: {
         baseDir: "./"
     }
 });
 watch("./*.html").on('change', browserSync.reload);
 watch("./sass/**/*.sass", serveSass);
 watch("./js/*.js").on('change', browserSync.reload);
};

 // Compile sass into CSS & auto-inject into browsers
function serveSass() {
 return src("./sass/**/*.sass")
     .pipe(sass())
     .pipe(dest("./css"))
     .pipe(browserSync.stream());
};

exports.serve = bs;


/*

 // Compile CSS into minify CSS and rename .css into min.css
 gulp.task('mincss', function() {
  return gulp.src("css/*.css")
  .pipe(rename({suffix: ".min"}))
  .pipe(cleanCSS())
  .pipe(gulp.dest("css"));
  
  });

  */