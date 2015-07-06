"use strict";


var gulp = require("gulp"),
    gulpNgConfig = require("gulp-ng-config"),
    jshint = require("gulp-jshint"),
    karma = require("karma").server,
    merge = require("merge-stream");

//
gulp.task("build", function() {
    gulp.src("cfg")
        .pipe(gulpNgConfig("CFG"))
        .pipe(gulp.dest("app/js"));
});

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


gulp.task("test", function(done) {
    karma.start({
        configFile: __dirname + "/karma.conf.js",
        singleRun: true
    }, done);
});


//
gulp.task("watch", function() {
    gulp.watch("app/js/*.js", ["lint", "test"]);
    gulp.watch("app/js/*/*.js", ["lint", "test"]);
});


//
gulp.task("default", ["lint", "watch"]);
