"use strict";


var gulp = require("gulp"),
    jshint = require("gulp-jshint"),
    merge = require("merge-stream");

//
gulp.task("lint", function() {
    var main = gulp.src("app/js/*.js")
        .pipe(jshint())
        .pipe(jshint.reporter("default"));

    var sub = gulp.src("app/js/*/*.js")
        .pipe(jshint())
        .pipe(jshint.reporter("default"));

    return merge(main, sub);
});


gulp.task("watch", function() {
    gulp.watch("app/js/*.js", ["lint"]);
    gulp.watch("app/js/*/*.js", ["lint"]);
});

//
gulp.task("default", ["lint", "watch"]);
