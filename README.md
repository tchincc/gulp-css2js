# gulp-css2js

Change your css code into js files, so that you can import them as string and render into the page in client.

Code like this:
```javascript
gulp.src('*.less')
    .pipe(less())
    .pipe(cssmin())
    .pipe(css2js())
    .pipe(gulp.dest('deploy'));
```
