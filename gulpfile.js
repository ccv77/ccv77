var gulp = require("gulp");
var sass = require("gulp-sass");
var shell = require("gulp-shell");
var fs = require("fs-extra");

const srcDir = "./src",
  destDir = "./site";

/*
 Clean the site build directory
*/
gulp.task("clean", function(done) {
  fs.removeSync(destDir);
  done();
});

/*
 Generate static site
*/
gulp.task(
  "generate",
  shell.task(
    `eleventy --config=${srcDir}/.eleventy.js --input=${srcDir} --output=${destDir} --pathprefix=${destDir}`
  )
);

/*
 Generate static site, watch and serve Eleventy locally
*/
gulp.task(
  "watch-eleventy",
  shell.task(
    `eleventy --serve --config=${srcDir}/.eleventy.js --input=${srcDir} --output=${destDir}`
  )
);

/*
Compile SCSS files to CSS
*/
gulp.task("compile-scss", function() {
  return gulp
    .src([
      `${srcDir}/assets/scss/print.scss`,
      `${srcDir}/assets/scss/ccv77.scss`
    ])
    .pipe(
      sass({
        outputStyle: "compressed"
      }).on("error", sass.logError)
    )
    .pipe(gulp.dest(`${destDir}/css`));
});

/*
  Watch src SCSS folder for changes
*/
gulp.task("watch-scss", function() {
  gulp.series("compile-scss")();
  return gulp.watch(`${srcDir}/assets/scss`, gulp.parallel("compile-scss"));
});

gulp.task("serve", gulp.parallel("clean", "watch-eleventy", "watch-scss"));
gulp.task("default", gulp.series("clean", "generate", "compile-scss"));
