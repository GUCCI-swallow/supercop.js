var gulp = require('gulp');
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var buffer = require("vinyl-buffer");
var uglify = require("gulp-uglify");

gulp.task("dist", function(){
    browserify({
        entries: ["./app.js"]
    })
    .bundle()
    .pipe(source("supercop.js"))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest("dist/"));
});
