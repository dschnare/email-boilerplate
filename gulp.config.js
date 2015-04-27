"use strict";


function config() {
	return {
		sassFiles: "sass/styles.scss",
		lessFiles: "less/styles.less",
		patternFiles: "templates/patterns/*.html",
		templateFiles: "templates/*.html",

		dest: "dist",
		destEmail: "dist/email.html",
		destEmailInline: "dist/email.inline.html",
		destCss: "dist/styles.css",
		destPatterns: "dist/patterns.all.html"
	};
}

module.exports = config();
