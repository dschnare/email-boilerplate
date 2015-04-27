"use strict";


var config = require("./gulp.config");
var async = require("async");
var gulp = require("gulp");
var sass = require("gulp-sass");
var less = require("gulp-less");
var replace = require("gulp-replace");
var concat = require("gulp-concat");
var fs = require("fs");
var request = require("superagent");


function readFiles(files, callback) {
	async.parallel(files.map(function (file) {
		return async.apply(fs.readFile, file, { encoding: "utf8" });
	}), callback);
}

gulp.task("less:build", function () {
	return gulp.src(config.lessFiles)
    .pipe(less())
    .pipe(gulp.dest(config.dest));
});

gulp.task("sass:build", function () {
	return gulp.src(config.sassFiles)
    .pipe(sass())
    .pipe(gulp.dest(config.dest));
});

gulp.task("html:patterns", ["sass:build"], function (done) {
	return gulp.src(config.patternFiles)
		.pipe(concat("patterns.all.html"))
		.pipe(gulp.dest(config.dest));
});

gulp.task("html:build", ["sass:build", "html:patterns"], function (done) {
	readFiles([
		config.destCss,
		config.destPatterns
	], function (error, files) {
		if (error) {
			done(error);
		} else {
			files[0] = ['<style type="text/css">', files[0], "</style>"].join("\n");
			gulp.src(config.templateFiles)
				.pipe(replace("%styles%", files[0]))
				.pipe(replace("%body%", files[1]))
				.pipe(gulp.dest(config.dest))
				.on("end", done);
			}
	})
});

gulp.task("html:inline", ["html:build"], function (done) {
	fs.readFile(config.destEmail, {
		encoding: "utf8"
	}, function (error, html) {
		if (error) {
			done(error);
			return;
		}

		request.post("http://inliner.cm/inline.php")
			.type("form")
			.send({ code: html })
			.end(function (err, response) {
				if (err) {
					done(err);
				} else {
					fs.writeFile(config.destEmailInline, response.body.HTML, { encoding: "utf8" }, done);
				}
			});
	});
});
