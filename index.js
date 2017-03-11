
/**
 *
 * Change css to xxx.css.js
 *
 * @author mimi
 *
 * @description
 * Change your css code into js files,
 * that you can render them in server htmls before the page is renderred in the client
 *
 * @example
 * gulp.src('*.less')
 *     .pipe(cssmin())
 *     .pipe(css2js())
 *     .pipe(gulp.dest('deploy'))
 *
 */
var through2       = require('through2');
var gutil          = require('gulp-util');

module.exports = function (options) {
	return through2.obj(function(file, enc, cb) {
		if (file.isNull()) {
			return cb(null, file);
		}

		file.contents = new Buffer("module.exports=\'"+file.contents.toString().replace(/\'/g, '\"')+"\';");
		file.path = gutil.replaceExtension(file.path, '.css.js');

		cb(null, file);
	});
};









